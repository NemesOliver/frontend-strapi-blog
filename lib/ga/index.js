/**
 *
 * @summary Helper functions to let Google Analytis ( gtag ) know of page changes and events.
 */

// log the pageview with their URL
export const pageview = (url) => {
  if (window.gtag && window.gtag !== "undefined") {
    window.gtag("config", process.env.NEXT_PUBLIC_GA_ID, {
      page_path: url,
    });
  }
};

// log specific events happening.
export const event = ({ action, params }) => {
  if (window.gtag) {
    window.gtag("event", action, params);
  }
};
