import React, { Fragment, FC } from "react";
import { Head } from "@/components/shared";
import { GetServerSideProps } from "next/types";

interface CatchAllProps {
  is404: boolean;
  slug: string[];
}

const CatchAll: FC<CatchAllProps> = ({ is404, slug }) => {
  return (
    <Fragment>
      <Head title="Not found" />
      {is404 && (
        <section className="flex p-4 justify-center">
          <div>
            <h1>Oops! Page not found in Dashboard</h1>
            <p>Invalid section: {slug.join("/")}</p>
          </div>
        </section>
      )}
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.query.slug || [];

  const validRoutes = ["about-us", "contact-us"];
  const is404 = slug.length > 0 && !validRoutes.includes(slug[0]);

  return {
    props: {
      slug,
      is404,
    },
  };
};

export default CatchAll;
