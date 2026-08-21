import test from 'node:test';
import assert from 'node:assert/strict';
import {
  handleContactConversion,
  LEGACY_CONVERSION_ID,
  PHONE_CONVERSION_ID,
  PHONE_URL,
  ZALO_CONVERSION_ID,
  ZALO_URL,
} from './googleAdsConversion.js';

const createWindowMock = ({ gtag } = {}) => {
  const navigations = [];
  const location = {};

  Object.defineProperty(location, 'href', {
    get: () => navigations.at(-1),
    set: (url) => navigations.push(url),
  });

  globalThis.window = {
    location,
    open: (url) => navigations.push(url),
    ...(gtag ? { gtag } : {}),
  };

  return navigations;
};

const createClickEvent = () => {
  let preventDefaultCalls = 0;
  return {
    event: {
      preventDefault: () => {
        preventDefaultCalls += 1;
      },
    },
    getPreventDefaultCalls: () => preventDefaultCalls,
  };
};

test('phone click sends legacy and phone conversions once, then navigates once', () => {
  const conversionIds = [];
  const navigations = createWindowMock({
    gtag: (_command, _eventName, parameters) => {
      conversionIds.push(parameters.send_to);
      parameters.event_callback?.();
    },
  });
  const click = createClickEvent();

  handleContactConversion(click.event, PHONE_URL);

  assert.deepEqual(conversionIds, [LEGACY_CONVERSION_ID, PHONE_CONVERSION_ID]);
  assert.equal(new Set(conversionIds).size, 2);
  assert.deepEqual(navigations, [PHONE_URL]);
  assert.equal(click.getPreventDefaultCalls(), 1);
});

test('Zalo click sends legacy and Zalo conversions once, then opens once', () => {
  const conversionIds = [];
  const navigations = createWindowMock({
    gtag: (_command, _eventName, parameters) => {
      conversionIds.push(parameters.send_to);
      parameters.event_callback?.();
    },
  });
  const click = createClickEvent();

  handleContactConversion(click.event, ZALO_URL, { openInNewTab: true });

  assert.deepEqual(conversionIds, [LEGACY_CONVERSION_ID, ZALO_CONVERSION_ID]);
  assert.equal(new Set(conversionIds).size, 2);
  assert.deepEqual(navigations, [ZALO_URL]);
  assert.equal(click.getPreventDefaultCalls(), 1);
});

test('navigation still works when gtag is missing', () => {
  const navigations = createWindowMock();

  handleContactConversion(createClickEvent().event, PHONE_URL);

  assert.deepEqual(navigations, [PHONE_URL]);
});

test('navigation still works when gtag throws', () => {
  let attempts = 0;
  const navigations = createWindowMock({
    gtag: () => {
      attempts += 1;
      throw new Error('Google blocked');
    },
  });

  handleContactConversion(createClickEvent().event, ZALO_URL, { openInNewTab: true });

  assert.equal(attempts, 2);
  assert.deepEqual(navigations, [ZALO_URL]);
});
