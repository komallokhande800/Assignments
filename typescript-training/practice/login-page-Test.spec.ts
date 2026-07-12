import { test, expect, Locator } from '@playwright/test';

let username: Locator;
let password: Locator;
let termsCheck: Locator;
let submitbtn: Locator;

test.describe('Login functionality', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        username = page.locator("#username");
        password = page.locator("#password");
        termsCheck = page.locator("#terms");
        submitbtn = page.locator("#signInBtn");
    });

    test('Valid login', async ({ page }) => {

        await username.fill("rahulshettyacademy");
        await password.fill("Learning@830$3mK2");
        await termsCheck.click();
        await submitbtn.click();
        await expect(page.getByRole("link", { name: 'ProtoCommerce Home' })).toBeVisible();
    })

    test('Invalid message validate', async ({ page }) => {

        await username.fill("rahulshettyacademy");
        await password.fill("Learning@830$3mK2");
        await termsCheck.click();
        await submitbtn.click();
        await expect(page.getByText("Incorrect username/password.")).toBeVisible();
    })

    test('Validate required fields', async ({ page }) => {
        await username.fill("");
        await password.fill("");
        await termsCheck.click();
        await submitbtn.click();
        await expect(page.getByText("Empty username/password.")).toBeVisible();
    });
});