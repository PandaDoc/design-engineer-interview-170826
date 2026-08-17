// Registers the jest-dom matchers (toBeInTheDocument, toBeDisabled, …) on
// Vitest's expect. Loaded once per test file via vitest.config.mts.
import "@testing-library/jest-dom/vitest";

// RTL's auto-cleanup needs a global `afterEach`, which we don't have
// (Vitest runs without `globals: true`) — so unmount between tests here.
import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

afterEach(cleanup);

// jsdom ships no matchMedia, so anything reading prefers-reduced-motion blows
// up on mount. Stub it as "no preference" — a test that needs the opposite can
// reassign window.matchMedia itself.
if (!window.matchMedia) {
  window.matchMedia = (media: string) =>
    ({
      media,
      matches: false,
      onchange: null,
      addEventListener: () => {},
      removeEventListener: () => {},
      addListener: () => {},
      removeListener: () => {},
      dispatchEvent: () => false,
    }) as MediaQueryList;
}
