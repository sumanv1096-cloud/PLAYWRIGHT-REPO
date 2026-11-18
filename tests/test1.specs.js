const { test, expect } = require('@playwright/test');


test('  First playwrigt test',async ({browser})=>
{
const context=await browser.newContext();
const page=await context.newPage();
await page.goto("https://bank-of-brothers.vercel.app/login");
const username=await page.locator('#username').type('admin');
const password=await page.locator('#password').type('admin123');
const loginButton=await page.locator('.btn btn-block').click();


});
