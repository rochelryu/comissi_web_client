import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        {/* meta begin */}
        <meta charSet="utf-8" />
        {/* meta end */}

        {/* favicon begin */}
        <link rel="icon" href="assets/img/logo.png" />
        {/* favicon end */}

        {/* public assets begin */}

        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.css"
          integrity="sha512-WEQNv9d3+sqyHjrqUZobDhFARZDko2wpWdfcpv44lsypsSuMO0kHGd3MQ8rrsBn/Qa39VojphdU6CMkpJUmDVw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          type="text/css"
          media="all"
        />

        
        <link rel="stylesheet" href="/assets/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/assets/css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="/assets/css/nice-select.css" />
        <link rel="stylesheet" href="/assets/css/aos.css" />
        {/* <link rel="stylesheet" href="/assets/css/style1.css" /> */}
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
        <link rel="stylesheet" href="/assets/css/color.css" />
        {/* public assets end */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
