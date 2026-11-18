const { test, expect } = require('@playwright/test');
const { aborted } = require('node:util');


test('amazon test',async({page})=>
    {

 await page.goto("file:///C:/Users/Nithin123/Downloads/playwright-practice%20(2).html");
 const dropdown=await page.locator("#sel-country").first();
              //await dropdown.selectOption({index: 2});
              await dropdown.selectOption({label:'Canada'});
             console.log(await dropdown.textContent());

             await page.pause();

    });