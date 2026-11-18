const { test, expect } = require('@playwright/test');


test('amazon test',async({page})=>
    {
  await page.goto("file:///C:/Users/Nithin123/Downloads/playwright-practice%20(5).html#checks");
  await page.getByText('Right click me').click({ button: 'right'});

  await page.pause();

    });