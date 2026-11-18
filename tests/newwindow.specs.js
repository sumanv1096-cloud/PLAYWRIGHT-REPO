const { test, expect } = require('@playwright/test');

test('First Playwright test', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://testautomationpractice.blogspot.com/');

  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.click('#HTML4 button'),
  ]);

  await newPage.waitForLoadState();
  console.log(await newPage.title());

  console.log(await newPage.locator('.widget-content').first().click());
});