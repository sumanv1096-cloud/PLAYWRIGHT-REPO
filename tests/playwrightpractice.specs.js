const { test, expect } = require('@playwright/test');


test('amazon test',async({page})=>
    {

 await page.goto("file:///C:/Users/Nithin123/Downloads/playwright-practice%20(2).html");
 const alltext= await page.locator(".products").first().allTextContents();
 console.log(alltext);
 await page.pause();
    });