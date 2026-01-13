import { test, expect } from "@playwright/test";
import { LoginPage } from "../src/pages/LoginPage";

test("User can login successfully", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();
  await loginPage.login("standard_user", "secret_sauce");

  await expect(page).toHaveURL(/inventory\.html/);
});
