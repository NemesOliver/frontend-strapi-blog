// log the pageview with their URL
export const pageview = (url) => {
  if (typeof window.gtag !== "undefied") {
    window.gtag("config", process.env.NEXT_PUBLIC_GA_ID, {
      page_path: url,
    });
  }
};

// log specific events happening.
export const event = ({ action, params }) => {
  window.gtag("event", action, params);
};