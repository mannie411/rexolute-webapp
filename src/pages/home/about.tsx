import React, { Fragment } from "react";
import Image from "next/image";

import { useRouter } from "next/router";
import { Head } from "@/components/shared";
import { HomeLayout } from "@/components/layout";

const Page = () => {
  const router = useRouter();
  return (
    <Fragment>
      <Head title="About us" />
      <HomeLayout>
        <section className="flex h-screen w-screen justify-center items-center">
          <h1>Home</h1>
        </section>
      </HomeLayout>
    </Fragment>
  );
};

export default Page;
