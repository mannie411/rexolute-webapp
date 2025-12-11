import React, { useState, useRef, useCallback, useMemo, Fragment } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { DocViewerRenderers, type DocViewerProps } from "react-doc-viewer";
import { useGesture } from "@use-gesture/react";
import { animated, useSpring, SpringValue } from "@react-spring/web";
import {
  RotateCw,
  ZoomIn,
  ZoomOut,
  ChevronLeft,
  ChevronRight,
  RefreshCcw,
  Download,
  FileText,
} from "lucide-react";

import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Separator,
} from "@/components/ui";

import { FileType } from "@/types";
import { getFileType } from "@/lib/utils";

// Type for the animated spring values
type AnimatedStyle = {
  x: SpringValue<number>;
  y: SpringValue<number>;
  scale: SpringValue<number>;
};

interface RendererProps {
  fileUrl: string;
  filename?: string;
  state: ViewerState;
  actions: ViewerActions;
}

interface ViewerState extends AnimatedStyle {
  rotation: SpringValue<number>; // Use SpringValue for rotation for smoother animation
  numPages: number;
  pageNumber: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
  fileType: FileType;
}

interface ViewerActions {
  zoomIn: () => void;
  zoomOut: () => void;
  resetView: () => void;
  rotate: () => void;
  nextPage: () => void;
  prevPage: () => void;
  download: () => void;
  onPDFLoad: ({ numPages }: { numPages: number }) => void;
}

export type FilesProps = {
  fileUrl: string;
  filename?: string;
};

export interface FileViewerProps {
  state: ViewerState;
  actions: ViewerActions;
}

const Document = dynamic(
  async () => {
    // This code runs only on the client (ssr: false)
    const mod = await import("react-pdf");

    // Set the worker source immediately after importing the module
    if (mod.pdfjs && typeof window !== "undefined") {
      console.log("pdfjs loaded");
      mod.pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";
    }
    console.log("document loaded");
    return mod.Document;
  },
  { ssr: false }
);

// Keep Page dependent on Document's import, but no need to repeat setup
const Page = dynamic(() => import("react-pdf").then((mod) => mod.Page), {
  ssr: false,
});

const DocViewer = dynamic(() => import("react-doc-viewer"), { ssr: false });

// --- Custom Hook for Viewer Logic ---
export const useFileViewer = (fileUrl: string, filename?: string) => {
  const fileType = useMemo(() => getFileType(fileUrl), [fileUrl]);

  // State for PDF-specific features
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState(1);

  // Spring/Gesture setup for pan/zoom/rotate
  const containerRef = useRef<HTMLDivElement>(null);
  const [{ x, y, scale, rotation }, api] = useSpring(() => ({
    x: 0,
    y: 0,
    scale: 1,
    rotation: 0,
    config: { tension: 200, friction: 30 }, // Smoother spring config
  }));

  // Action functions
  const nextPage = useCallback(() => {
    if (pageNumber < numPages) setPageNumber((p) => p + 1);
  }, [pageNumber, numPages]);

  const prevPage = useCallback(() => {
    if (pageNumber > 1) setPageNumber((p) => p - 1);
  }, [pageNumber]);

  const resetView = useCallback(
    () => api.start({ x: 0, y: 0, scale: 1, rotation: 0, immediate: false }),
    [api]
  );

  const zoomIn = useCallback(
    () => api.start({ scale: scale.get() + 0.2 }),
    [api, scale]
  );
  const zoomOut = useCallback(
    () => api.start({ scale: Math.max(0.2, scale.get() - 0.2) }),
    [api, scale]
  );

  const rotate = useCallback(() => {
    // Animate rotation by adding 90 degrees
    const nextRotation = (rotation.get() + 90) % 360;
    api.start({ rotation: nextRotation });
  }, [api, rotation]);

  const download = useCallback(() => {
    const a = document.createElement("a");
    a.href = fileUrl;
    a.download = filename || fileUrl.split("/").pop() || "file"; // Fallback filename from URL
    a.click();
  }, [fileUrl, filename]);

  const onPDFLoad = useCallback(({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  }, []);

  // Enable pan + scroll zoom
  useGesture(
    {
      onDrag: ({ offset: [dx, dy] }: { offset: [number, number] }) =>
        api.start({ x: dx, y: dy }),
      onPinch: ({ offset: [d] }: { offset: [number, number] }) =>
        api.start({ scale: 1 + d / 200 }),
      onWheel: ({ event }: { event: WheelEvent }) => {
        event.preventDefault();
        api.start({
          scale: Math.min(
            Math.max(scale.get() + event.deltaY * -0.001, 0.5),
            5
          ),
        });
      },
    },
    {
      drag: { from: () => [x.get(), y.get()] },
      target: containerRef,
      eventOptions: { passive: false },
    }
  );

  const state: ViewerState = {
    x,
    y,
    scale,
    rotation,
    numPages,
    pageNumber,
    containerRef,
    fileType,
  };
  const actions: ViewerActions = {
    zoomIn,
    zoomOut,
    resetView,
    rotate,
    nextPage,
    prevPage,
    download,
    onPDFLoad,
  };

  return { state, actions };
};

// --- Renderer Components ---
export const AnimatedView: React.FC<React.PropsWithChildren<AnimatedStyle>> = ({
  children,
  x,
  y,
  scale,
}) => (
  <animated.div
    style={{ x, y, scale, touchAction: "none" }}
    className="h-full w-full flex items-center justify-center transition-transform"
    // className="flex justify-center transition-shadow"
  >
    {children}
  </animated.div>
);

export const ViewerContent: React.FC<RendererProps> = ({
  fileUrl,
  filename,
  state,
  actions,
}) => {
  const { fileType, x, y, scale, rotation, numPages } = state;
  const docViewerConfig: DocViewerProps["config"] = {
    header: { disableHeader: true },
  };

  // Use a single style object for all animated content
  const animatedStyle = useMemo(
    () => ({
      x,
      y,
      scale,
      rotate: rotation.to((r) => `${r}deg`),
    }),
    [x, y, scale, rotation]
  );

  switch (fileType) {
    /* Note: When using multi-page, pagination controls usually
     * switch the pageNumber prop, but since we're rendering ALL pages,
     * we rely on the component's internal index (i + 1)
     * */
    case "pdf":
      return (
        <Document file={fileUrl} onLoadSuccess={actions.onPDFLoad}>
          <div className="space-y-4 pb-10">
            {Array.from(new Array(numPages), (_, i) => (
              <AnimatedView key={i} {...animatedStyle}>
                <Page
                  pageNumber={i + 1}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                />
              </AnimatedView>
            ))}
          </div>
        </Document>
      );

    case "image":
      return (
        <AnimatedView {...animatedStyle}>
          <Image
            src={fileUrl}
            alt={filename || "image-file"}
            width={1000}
            height={1000}
            className="object-contain max-w-full max-h-full touch-manipulation"
            priority
          />
        </AnimatedView>
      );

    case "doc":
      return (
        <AnimatedView {...animatedStyle}>
          <DocViewer
            documents={[{ uri: fileUrl }]}
            pluginRenderers={DocViewerRenderers}
            config={docViewerConfig}
          />
        </AnimatedView>
      );

    case "unsupported":
    default:
      return (
        <div className="flex items-center justify-center h-full flex-col p-4 text-center">
          <FileText className="w-12 h-12 text-muted-foreground mb-4" />
          <h3 className="text-lg font-semibold">Unsupported File Type</h3>
          <p className="text-sm text-muted-foreground">
            Cannot display preview for this file type ({fileType}).
          </p>
          <Button className="mt-4" onClick={actions.download}>
            <Download className="h-4 w-4 mr-2" /> Download Anyway
          </Button>
        </div>
      );
  }
};

// --- Toolbar Component ---
const FileViewerToolbar: React.FC<FileViewerProps> = ({ state, actions }) => {
  const { fileType, pageNumber, numPages } = state;
  const isPDF = fileType === "pdf";
  const { zoomIn, zoomOut, resetView, rotate, prevPage, nextPage, download } =
    actions;

  return (
    <CardHeader className="p-3 border-b bg-muted/40">
      <div className="flex items-center gap-2">
        {/* View Controls */}
        <Button variant="ghost" size="icon" onClick={zoomIn} title="Zoom In">
          <ZoomIn className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" onClick={zoomOut} title="Zoom Out">
          <ZoomOut className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={resetView}
          title="Reset View (Pan/Zoom/Rotation)"
        >
          <RefreshCcw className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" onClick={rotate} title="Rotate 90°">
          <RotateCw className="h-4 w-4" />
        </Button>

        {/* Page Navigation (PDF only) */}
        {isPDF && (
          <Fragment>
            <Separator orientation="vertical" className="mx-2 h-6" />
            <Button
              variant="ghost"
              size="icon"
              onClick={prevPage}
              disabled={pageNumber <= 1}
              title="Previous Page"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-sm text-muted-foreground min-w-[70px] text-center">
              Page **{pageNumber}** / {numPages || "-"}
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextPage}
              disabled={pageNumber >= numPages}
              title="Next Page"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Separator orientation="vertical" className="mx-2 h-6" />
          </Fragment>
        )}

        {/* Download */}
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto"
          onClick={download}
          title="Download File"
        >
          <Download className="h-4 w-4" />
        </Button>
      </div>
    </CardHeader>
  );
};

// --- Main Component ---
const FileViewerClient = ({ fileUrl, filename }: FilesProps) => {
  const { state, actions } = useFileViewer(fileUrl, filename);
  const { containerRef } = state;

  return (
    <Card className="w-full border rounded-lg shadow-sm">
      {/* Toolbar */}
      <FileViewerToolbar state={state} actions={actions} />

      {/* Viewer Area */}
      <CardContent className="p-0">
        <div
          ref={containerRef}
          className="relative w-full h-[80vh] overflow-auto bg-muted touch-none"
        >
          <ViewerContent
            fileUrl={fileUrl}
            filename={filename}
            state={state}
            actions={actions}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default FileViewerClient;
