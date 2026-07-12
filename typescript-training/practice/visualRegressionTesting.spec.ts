import {test,expect} from '@playwright/test';

test('handling session storage and authentication', async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    //await expect(page).toHaveScreenshot('navigatedUrl.png');
    await page.locator("#username").fill("rahulshettyacademy");
    //await expect(page).toHaveScreenshot('filledUsername.png');
    await page.locator("#password").fill("Learning@830$3mK2");
    //await expect(page).toHaveScreenshot('filledPassword.png');
    await page.locator("#terms").click();
    //await expect(page).toHaveScreenshot('clikedTerms.png');
    await page.locator("#signInBtn").click();


})
