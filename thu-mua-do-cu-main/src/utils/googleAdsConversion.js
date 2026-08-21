export const PHONE_NUMBER = '0938228764';
export const PHONE_URL = `tel:${PHONE_NUMBER}`;
export const ZALO_URL = `https://zalo.me/${PHONE_NUMBER}`;

export const LEGACY_CONVERSION_ID = 'AW-18065404852/ChMJCNzriLUcELTnoKZD';
export const PHONE_CONVERSION_ID = 'AW-18065404852/skEoCL_e-OQcELTnoKZD';
export const ZALO_CONVERSION_ID = 'AW-18065404852/QQbvCJ-e-eQcELTnoKZD';

const navigateToContactUrl = (url, openInNewTab) => {
  if (openInNewTab) {
    window.open(url, '_blank', 'noopener,noreferrer');
    return;
  }

  window.location.href = url;
};

const getConversionIds = (url) => {
  if (url.startsWith('tel:')) {
    return [LEGACY_CONVERSION_ID, PHONE_CONVERSION_ID];
  }

  if (url.startsWith('https://zalo.me/')) {
    return [LEGACY_CONVERSION_ID, ZALO_CONVERSION_ID];
  }

  return [LEGACY_CONVERSION_ID];
};

const sendContactConversions = (url) => {
  if (typeof window.gtag !== 'function') return;

  const uniqueConversionIds = new Set(getConversionIds(url));
  uniqueConversionIds.forEach((conversionId) => {
    try {
      window.gtag('event', 'conversion', {
        send_to: conversionId,
      });
    } catch {
      // Navigation must remain available when Google is blocked or errors.
    }
  });
};

/**
 * Sends the legacy event and one contact-specific event at most once per click.
 * Navigation is owned here so Google callbacks can never open the URL twice.
 */
export const handleContactConversion = (event, url, { openInNewTab = false } = {}) => {
  event?.preventDefault();

  let hasNavigated = false;
  const navigateOnce = () => {
    if (hasNavigated) return;
    hasNavigated = true;
    navigateToContactUrl(url, openInNewTab);
  };

  sendContactConversions(url);
  navigateOnce();
};
