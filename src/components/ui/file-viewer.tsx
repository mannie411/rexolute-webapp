"use client";

import { FC } from "react";
import dynamic from "next/dynamic";
import { FilesProps, useFileViewer } from "../shared/file-viewer";
import { Skeleton } from "./skeleton";

const FileViewerClient = dynamic(() => import("../shared/file-viewer"), {
  ssr: false, // Disable server-side rendering for this component
  loading: () => <Skeleton className="h-[150px] w-full" />,
});

const FileViewer: FC<FilesProps> = ({ fileUrl, filename }) => {
  return <FileViewerClient fileUrl={fileUrl} filename={filename} />;
};

export default FileViewer;
