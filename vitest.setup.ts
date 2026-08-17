// Registers the jest-dom matchers (toBeInTheDocument, toBeDisabled, …) on
// Vitest's expect. Loaded once per test file via vitest.config.mts.
import "@testing-library/jest-dom/vitest";

// RTL's auto-cleanup needs a global `afterEach`, which we don't have
// (Vitest runs without `globals: true`) — so unmount between tests here.
import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

afterEach(cleanup);
