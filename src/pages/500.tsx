import React, { Fragment } from "react";
import Image from "next/image";
import { Head } from "../components/shared";

const Page = () => {
  return (
    <Fragment>
      <Head title="Internal Error" />

      <main className="flex h-screen w-screen justify-center items-center">
        <h1>Opsss... something went wrong.</h1>
      </main>
    </Fragment>
  );
};

export default Page;
