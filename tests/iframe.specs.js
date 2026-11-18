const { test, expect } = require('@playwright/test');


test('amazon test',async({page})=>
    {
  await page.goto("file:///C:/Users/Nithin123/Downloads/playwright-practice%20(5).html#checks");
 const frame=page.frameLocator('#pay-frame').first();
await frame.locator('#h').fill('1234');


await page.pause();
    });