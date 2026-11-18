const { test, expect } = require('@playwright/test');

test('First Playwright test', async ({ page }) => {


await page.goto('https://bank-of-brothers.vercel.app/login');
await page.locator('#username').fill('admin');
await page.locator('#password').fill('admin123');
await page.locator('.btn.btn-block').click();

await page.locator('.otp-row .otp-box').first().fill('1');
await page.locator('.otp-row .otp-box').nth(1).fill('2');
await page.locator('.otp-row .otp-box').nth(2).fill('3');
await page.locator('.otp-row .otp-box').nth(3).fill('4');
await page.locator('.otp-row .otp-box').nth(4).fill('5');
await page.locator('.otp-row .otp-box').nth(5).fill('6');
await page.locator('.otp-row .otp-box').nth(6).fill('7');
await page.locator('.otp-row .otp-box').nth(7).fill('8');

await page.locator('button.btn').nth(1).click();
await page.waitForLoadState('networkidle');
console.log(await page.title());
await expect(page).toHaveTitle("Bank of Brothers");


});

test.only('login invalid scenari Playwright test', async ({ page }) => {


await page.goto('https://bank-of-brothers.vercel.app/login');
const username=page.locator('#username');
const Paasword=page.locator('#password');
const signin=pag.locator('.btn.btn-block');
await username.fill('admin');
await Paasword.fill('admin123');
await signin.click();
console.log(await page.locator('.alert ').textContent());
await expect(page.locator('.alert ')).toContainText('Invalid username or password');

});