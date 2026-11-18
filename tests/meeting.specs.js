const { test, expect } = require('@playwright/test');


test('amazon test',async({page})=>
    {

 await page.goto("file:///C:/Users/Nithin123/Downloads/playwright-practice%20(2).html");
const time = page.getByLabel('Time');   // or page.locator('input[type="time"]')
await time.click();
await time.fill('14:30');  // always 24-hour HH:mm
 await page.pause();

    });