const { test, expect } = require('@playwright/test');


test('amazon test',async({page})=>
    {

 await page.goto("file:///C:/Users/Nithin123/Downloads/playwright-practice%20(2).html");
 await page.locator("[value='Python']").click();
 await expect(page.locator("[value='Python']").isChecked());
 console.log(await page.locator("[value='Python']").isVisible());
  console.log( await page.locator("[value='Python']").isEnabled());
   console.log(await page.locator("[value='Python']").isChecked());


    });