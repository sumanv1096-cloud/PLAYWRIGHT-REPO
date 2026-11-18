const { test, expect } = require('@playwright/test');


test('amazon test',async({page})=>
    {

 await page.goto("file:///C:/Users/Nithin123/Downloads/playwright-practice%20(2).html");
 await page.locator("[value='0-2 years']").click();
 console.log(await page.locator("[value='0-2 years']").isChecked());
 await expect(page.locator("[value='0-2 years']")).toBeChecked();


    });