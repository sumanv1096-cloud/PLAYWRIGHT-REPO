
const { test, expect } = require('@playwright/test');


test('amazon test',async({page})=>
    {

 await page.goto("https://vinothqaacademy.com/drop-down/");
 await page.locator("input[role='searchbox']").click();
 const drop=await page.locator(".select2-results").first();
console.log(await drop.allTextContents());


    });






