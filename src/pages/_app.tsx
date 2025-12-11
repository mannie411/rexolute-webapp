import { Fragment } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { SessionProvider } from "next-auth/react";
import dynamic from "next/dynamic";

import { AppPropsWithLayout } from "@/types";
import { inter, onest, poppins } from "@/assets/fonts";
import "@/assets/globals.css";
import { NoSSR } from "@/components/shared";

// Dynamically import layouts

const AdminLayout = dynamic(
  () => import("@/components/admin/layout/dashboard")
);
const HomeLayout = dynamic(() => import("@/components/home/layout"));

function App({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter();

  const isAdminRoute = router.pathname.startsWith("/admin");
  const isClientRoute = router.pathname.startsWith("/client");
  const isHomeRoute = router.pathname.startsWith("/home");

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);
  const pageContent = getLayout(<Component {...pageProps} />);

  let layout;
  if (isAdminRoute) {
    layout = (
      <SessionProvider>
        <NoSSR>
          <AdminLayout>{pageContent}</AdminLayout>
        </NoSSR>
      </SessionProvider>
    );
  } else if (isClientRoute) {
    layout = (
      <SessionProvider>
        <NoSSR>
          {pageContent} // Client routes use their own layout or default
        </NoSSR>
      </SessionProvider>
    );
  } else if (isHomeRoute) {
    layout = (
      <NoSSR>
        <HomeLayout>{pageContent}</HomeLayout>;
      </NoSSR>
    );
  } else {
    // Default case for routes not matching admin, client, or home
    layout = pageContent;
  }

  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/*
         *  The upgrade-insecure-requests directive instructs browsers to treat all of site's
         *  insecure URLs (those served over HTTP) as though they have been replaced
         * with secure URLs (those served over HTTPS). This is generally a good security practice.
         * */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
        <meta charSet="UTF-8" />
      </Head>
      <style>
        {`
          :root {
            --font-onest: ${onest.style.fontFamily};
            --font-inter: ${inter.style.fontFamily};
            --font-poppins:${poppins.style.fontFamily};
          }
        `}
      </style>

      {layout}
    </Fragment>
  );
}

export default App;
