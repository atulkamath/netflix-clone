import "tailwindcss/tailwind.css";

import { Provider } from "next-auth/client";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider session={pageProps.session}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
          />
        </Head>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
