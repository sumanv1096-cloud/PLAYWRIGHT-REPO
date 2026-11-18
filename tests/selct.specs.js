const { test, expect } = require('@playwright/test');

test('First Playwright test', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://testautomationpractice.blogspot.com/');
const days=await page.locator('(//div[@class="form-group"])[4]');

for (let i = 0; i <days.length; i++) {
   await days.nth(i).click();
   await expect(await days.nth(i).isChecked()).toBeTruthy();

}
 
await page.pause();
});