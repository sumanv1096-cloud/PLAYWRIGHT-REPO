const { test, expect } = require('@playwright/test');


test('amazon test',async({page})=>
    {

 await page.goto("file:///C:/Users/Nithin123/Downloads/playwright-practice%20(2).html");
 console.log(await page.title());
 await expect(page).toHaveTitle("Playwright Practice Bench");
 await page.locator("#news-email").last().fill("sumanv1096@gmail.com");
 await page.locator("[type='submit']").first().click();
 console.log(await page.locator("#news-out").textContent());
 await page.locator("input[type='checkbox']").first().click();
 await expect(page.locator("input[type='checkbox']").first()).not.toBeChecked();
       await page.pause();                                                               
   });

