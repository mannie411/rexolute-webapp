import React, { Fragment } from "react";
import { FileViewer } from "@/components/ui";
import { Head } from "@/components/shared";

const Page = () => {
  return (
    <Fragment>
      <Head title="Random" />

      <FileViewer
        fileUrl={
          // "https://res.cloudinary.com/hngojet/image/upload/v1765110050/rexolute/general/cert1_dl4auq.pdf"
          // "https://res.cloudinary.com/hngojet/image/upload/v1764578028/rexolute/general/yaluwyixd8clht9lnfm9.jpg"
          // "/doc1.docx"

          "/cert1.png"
        }
      />
    </Fragment>
  );
};

export default Page;
