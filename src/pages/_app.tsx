import { Fragment } from "react";
import Head from "next/head";

import "../assets/styles/globals.css";
import { AppPropsWithLayout } from "../types";
import { NoSSR } from "../components/shared";

function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Remove the tag below because its a security risk */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
        <meta charSet="UTF-8" />
      </Head>

      <NoSSR>
        <Fragment>{getLayout(<Component {...pageProps} />)}</Fragment>
      </NoSSR>
    </Fragment>
  );
}

export default App;
