const { test, expect } = require('@playwright/test');


test('amazon test',async({page})=>
    {
  await page.goto("file:///C:/Users/Nithin123/Downloads/playwright-practice%20(5).html#checks");
   const el=await page.locator(".hovercard").first();
 await el.hover();
 const text=await el.textContent();
 console.log(text);

    });