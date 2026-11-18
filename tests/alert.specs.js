const { test, expect } = require('@playwright/test');

test('First Playwright test', async ({ page }) => {
  await page.goto('https://demoqa.com/alerts');

  let alerttext;

  page.once('dialog', async dialog => {
    alerttext = dialog.message();
    console.log(alerttext);
    await dialog.accept();
  });

  await page.locator('#alertButton').click();

 expect(alertText).toBe('I am an alert box!');
});


test.only('second Playwright test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  let alerttext;

  page.once('dialog', async dialog => {
    alerttext = dialog.message();
    console.log(alerttext);
    await dialog.accept('Nithin');
  });

  await page.locator('#promptBtn').click();

 //expect(alertText).toBe('I am an alert box!');

});
