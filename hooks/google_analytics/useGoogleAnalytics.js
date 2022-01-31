import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { CookieConsent } from "../../components";

import * as ga from "../../lib/ga";

const useGoogleAnalytics = () => {
  const [gaConsentGranted, setgaConsentGranted] = useState(false);
  const [showConsentMessage, setShowConsentMessage] = useState(false);
  const router = useRouter();

  const acceptCookies = () => {
    setgaConsentGranted(true); // Enable scripts
    setShowConsentMessage(false);
  };

  const declineCookies = () => setShowConsentMessage(false);

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

  const Consent = () => {
    return (
      showConsentMessage && (
        <CookieConsent accept={acceptCookies} decline={declineCookies} />
      )
    );
  };

  return {
    gaConsentGranted,
    Consent,
  };
};

export default useGoogleAnalytics;
