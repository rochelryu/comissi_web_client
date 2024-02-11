import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import "@/styles/globals.css";
import "@/styles/event-ticket.css";

export default function App({ Component, pageProps }) {
  

  return (
    <Fragment>
      <Head>
        {/* seo begin */}
        <title>COMICI</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* seo end */}        
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}
