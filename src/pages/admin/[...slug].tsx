import React, { Fragment, FC } from "react";
import { AdminLayout } from "@/components/layout";

interface CatchAllProps {
  is404: boolean;
  slug: string[];
}

const CatchAll: FC<CatchAllProps> = ({ is404, slug }) => {
  return (
    is404 && (
      <section className="flex p-4 justify-center">
        <div>
          <h1>Oops! Page not found in Dashboard</h1>
          <p>Invalid section: {slug.join("/")}</p>
        </div>
      </section>
    )
  );
};

export async function getServerSideProps(context: {
  params: { slug: never[] };
}) {
  const slug = context.params.slug || [];

  const validRoutes = ["settings", "reports", "profile"];
  const is404 = slug.length > 0 && !validRoutes.includes(slug[0]);

  return {
    props: {
      slug,
      is404,
    },
  };
}

export default CatchAll;
