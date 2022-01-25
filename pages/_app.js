import Script from "next/script";
import "../styles/globals.css";
import { Layout } from "../components";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      />

      <Script id="ga-analytics" strategy="lazyOnload">
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', ${process.env.NEXT_PUBLIC_GA_ID}, {
        page_path: window.location.pathname,
      });
  `}
      </Script>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
