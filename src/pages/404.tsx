import React, { Fragment } from "react";
import Image from "next/image";

import { useRouter } from "next/router";
import { Head } from "../components/shared";

const Page = () => {
  const router = useRouter();
  return (
    <Fragment>
      <Head title="Not Found" />

      <main className="flex h-screen w-screen justify-center items-center">
        <h1>Page Not Found</h1>
      </main>
    </Fragment>
  );
};

export default Page;
