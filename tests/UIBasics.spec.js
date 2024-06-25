const { test, expect } = require('@playwright/test');

test('Browser context PlayWright Test', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://amazon.com");
  console.log(await page.title());
  await expect(page).toHaveTitle("Amazon.com. Spend less. Smile more.");
});

test('Page PlayWright Test', async ({ page }) => {
  await page.goto("https://google.com");
  console.log(await page.title());
  await expect(page).toHaveTitle("Google");
});
