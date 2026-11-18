const { test, expect } = require('@playwright/test');


test('amazon test',async({page})=>
    {
  await page.goto("file:///C:/Users/Nithin123/Downloads/playwright-practice%20(5).html#checks");
 const source=await page.locator("#card-1");
 const target=await page.locator("#col-done").first();
 await source.dragTo(target);

 await pqage.pause();

    });