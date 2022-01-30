import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Script from "next/script";
import { CookieConsent, Layout } from "../components";
import "../styles/globals.css";

import * as ga from "../lib/ga";

function MyApp({ Component, pageProps }) {
  const [gaConsent, setGaConsent] = useState(false);
  const [showConsentMessage, setShowConsentMessage] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // If no Cookie is stored, and no consent has been given => show cookie consent message
    if (typeof window !== "undefined" && !window.document.cookie) {
      setShowConsentMessage(true);
    }

    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  const acceptCookies = () => {
    setGaConsent(true); // Enable scripts
    setShowConsentMessage(false);
  };

  const declineCookies = () => setShowConsentMessage(false);

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      {gaConsent && (
        <>
          <Script
            strategy="lazyOnload"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          />
          <Script
            id="ga-analyitcs"
            strategy="afterInteractive"
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
      {showConsentMessage && (
        <CookieConsent accept={acceptCookies} decline={declineCookies} />
      )}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
