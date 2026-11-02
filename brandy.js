/* Mintlify loads content-directory JavaScript once per document, after interactive. */
(function loadBrandy() {
  'use strict';

  const location = window.location;
  if (
    location.protocol !== 'https:' ||
    (location.port !== '' && location.port !== '443') ||
    !['docs.alysium.ai', 'alysium.mintlify.site'].includes(location.hostname)
  ) {
    return;
  }

  // The document survives Mintlify navigation. Never remount the SDK on route changes.
  const stateKey = Symbol.for('alysium.docs.brandy.loader');
  if (document[stateKey]) return;
  const state = { status: 'loading' };
  document[stateKey] = state;

  try {
    const src = 'https://app.alysium.ai/cdn/widget-v1.js';
    const attributes = {
      src,
      'data-agent-id': 'uyk4hrzmh9jc',
      'data-placement': 'floating',
      'data-position': 'bottom-right',
    };

    // The SDK reads the first widget-v1.js tag. A second SDK could initialize the
    // wrong agent, so retain an existing embed rather than insert another copy.
    const existing = Array.from(document.querySelectorAll('script[src]')).find((script) =>
      script.src.includes('widget-v1.js')
    );
    if (existing) {
      state.status = Object.entries(attributes).every(
        ([name, value]) => existing.getAttribute(name) === value
      )
        ? 'existing'
        : 'conflict';
      return;
    }

    const script = document.createElement('script');
    Object.entries(attributes).forEach(([name, value]) => script.setAttribute(name, value));
    script.addEventListener('load', () => {
      // A loaded script is not a claim that the agent or iframe is ready.
      state.status = 'loaded';
    }, { once: true });
    script.addEventListener('error', () => {
      state.status = 'failed';
    }, { once: true });
    document.head.appendChild(script);
  } catch {
    // CSP/network/insertion failure must never replace or block documentation.
    // Keep the sentinel: retrying on navigation could duplicate a partial SDK.
    state.status = 'failed';
  }
})();
