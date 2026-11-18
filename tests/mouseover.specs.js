const { test, expect } = require('@playwright/test');


test('amazon test',async({page})=>
    {
  await page.goto("file:///C:/Users/Nithin123/Downloads/playwright-practice%20(5).html#checks");
  //await page.locator('#m-click').first().click();
  await page.locator('#m-dbl').dblclick();
  console.log(await page.locator('#mouse-out').textContent());


  await page.pause();
    });