import Script from "next/script";
import { Layout } from "../components";
import { useGoogleAnalytics } from "../hooks";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const { gaConsentGranted, Consent } = useGoogleAnalytics();

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      {gaConsentGranted && (
        <>
          <Script
            strategy="lazyOnload"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          />
          <Script
            id="ga-analyitcs"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
  
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_path: window.location.pathname,
                  });
          `,
            }}
          />
        </>
      )}
      <Consent />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
