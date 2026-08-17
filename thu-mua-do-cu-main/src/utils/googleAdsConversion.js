export const PHONE_NUMBER = '0938228764';
export const PHONE_URL = `tel:${PHONE_NUMBER}`;
export const ZALO_URL = `https://zalo.me/${PHONE_NUMBER}`;

const navigateToContactUrl = (url, openInNewTab) => {
  if (openInNewTab) {
    window.open(url, '_blank', 'noopener,noreferrer');
    return;
  }

  window.location.href = url;
};

/**
 * Sends exactly one event through the existing Google Ads conversion helper.
 * Navigation is kept as a fallback so Call/Zalo still works when Google is blocked.
 */
export const handleContactConversion = (event, url, { openInNewTab = false } = {}) => {
  event?.preventDefault();

  let hasNavigated = false;
  const navigateOnce = () => {
    if (hasNavigated) return;
    hasNavigated = true;
    navigateToContactUrl(url, openInNewTab);
  };

  if (typeof window.gtag_report_conversion === 'function') {
    try {
      // Navigation is owned exclusively by navigateOnce(). Passing no URL
      // prevents the existing Google callback from opening tel:/Zalo again.
      window.gtag_report_conversion();
    } catch {
      // The contact action must still work when Google is blocked or errors.
    }
  }

  navigateOnce();
};
