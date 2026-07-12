import {test,expect} from '@playwright/test';
test('handling session storage and authentication', async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator("#username").fill("rahulshettyacademy");
    await page.locator("#password").fill("Learning@830$3mK2");
    await page.locator("#terms").click();
    await page.locator("#signInBtn").click();
    await page.context().storageState({path:'state.json'});


})

test.use({storageState:'state.json'});
test('reused session storage', async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/angularpractice/shop");
    await expect(page.locator("a.navbar-brand ").nth(1)).toHaveText("ProtoCommerce Home");
})

