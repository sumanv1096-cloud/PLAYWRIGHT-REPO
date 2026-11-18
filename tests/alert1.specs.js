const { test, expect } = require('@playwright/test');
const { aborted } = require('node:util');


test('amazon test',async({page})=>
    {

 await page.goto("file:///C:/Users/Nithin123/Downloads/playwright-practice%20(4).html");
 page.on('dialog', async dialog => {
    console.log(dialog.type());     // 'alert'
    console.log(dialog.message());  // alert text
    await dialog.dismiss("suman");
  });

 //await page.locator("#d-alert").first().click();
//await page.locator("#d-confirm").first().click();
await page.locator("#d-prompt").first().click();
  await page.pause();

    });