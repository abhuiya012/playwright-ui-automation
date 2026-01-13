import { defineConfig } from "@playwright/test";

const isDocker = process.env.DOCKER === "true";

export default defineConfig({
  testDir: "./tests",
  timeout: 30000,
  retries: process.env.CI ? 1 : 0,
  reporter: [["html", { outputFolder: isDocker ? "docker-artifacts/playwright-report" : "playwright-report", open: "never" }]],
  use: {
    headless: true,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    baseURL: "https://www.saucedemo.com",
  },
});
