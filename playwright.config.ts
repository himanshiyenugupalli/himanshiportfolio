import { defineConfig } from "@playwright/test";

/**
 * Playwright config for visual / DOM regression tests.
 *
 * The dev server is expected to already be running on http://localhost:8080
 * (Lovable sandbox default). If you run tests locally, start the dev server
 * first with `bun run dev`.
 */
export default defineConfig({
  testDir: "./tests/e2e",
  timeout: 60_000,
  expect: { timeout: 10_000 },
  fullyParallel: false,
  retries: 0,
  reporter: [["list"]],
  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL ?? "http://localhost:8080",
    headless: true,
    viewport: { width: 1280, height: 800 },
  },
});
