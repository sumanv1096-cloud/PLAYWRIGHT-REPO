const { test, expect } = require('@playwright/test');


test('amazon test',async({page})=>
    {
  await page.goto("file:///C:/Users/Nithin123/Downloads/playwright-practice%20(5).html#checks");
  const [newPage] = await Promise.all([
  page.waitForEvent('popup'),
  page.getByRole('link', { name: 'Open help in a new tab' }).click(),
]);
await newPage.waitForLoadState();
await newPage.getByLabel('Message for the opener').fill('Hello from Playwright');

await page.pause();
    });