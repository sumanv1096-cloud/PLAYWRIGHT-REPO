const { test, expect } = require('@playwright/test');
const { parseEnv } = require('node:util');


test('amazon test',async({page})=>
    {

 await page.goto("https://practice-automation.com/calendars/");
 await page.locator("[type='text']").first().click();
//wait page.locator("[type='text']").first().fill("206-11-11");
await page.locator(".dp button").first().click();
await page.getByText("April").click();
await page.locator(".dp button").nth(1).click();
await page.getByText("2025").click();
await page.locator('button[aria-label^="Thu Apr 10 2025"]').click();



 await page.pause();
  
    });