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

test.only('Login to Website', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  console.log(await page.title());
  await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
  const userName = page.locator('input#username');
  const password =  page.locator("[type='password']");
  const signIn = page.locator("[name='signin']");
  const incorrectCredsErrorMsg = page.locator("[style*='block']");
  const cardTitles = page.locator('div.card-body a');
  await userName.fill('admin');
  await password.fill('password');
  await signIn.click();
  await expect(incorrectCredsErrorMsg).toContainText("Incorrect username/password.");
  await userName.fill('');
  await password.fill('');
  await signIn.click();
  await expect(incorrectCredsErrorMsg).toContainText("Empty username/password.");
  await userName.fill('rahulshettyacademy');
  await password.fill('learning');
  await signIn.click();
  await expect(page).toHaveTitle("ProtoCommerce");
  // console.log(await cardTitles.first().textContent());
  // console.log(await cardTitles.nth(0).textContent());
  // console.log(await cardTitles.nth(1).textContent());
  // console.log(await cardTitles.nth(2).textContent());
  // console.log(await cardTitles.nth(3).textContent());
  // console.log(await cardTitles.last().textContent());
  await page.waitForLoadState('domcontentloaded');//waits for dom to load
  const allCardTitlesText = await cardTitles.allTextContents();//this method is not supported by playwright to wait for the contents to load
  console.log(allCardTitlesText);
});
