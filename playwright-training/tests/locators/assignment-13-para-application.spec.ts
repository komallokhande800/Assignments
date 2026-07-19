import { test, expect } from '@playwright/test'
test('Locator practice', async ({ page }) => {
    await page.goto("https://parabank.parasoft.com/parabank/index.htm");
    const logo = await page.locator('img[src*="logo"][alt="ParaBank"]');
    await expect(logo).toBeVisible();

    const expText = await page.getByText("Experience the difference");
    await expect(expText).toContainText("Experience the difference");

    const solutions = await page.locator('ul > li[class=Solutions]');
    await expect(solutions).toHaveText('Solutions');

    const aboutUs = await page.locator('div> ul[class="leftmenu"]> li> a[href*="about.htm"]');
    await expect(aboutUs).toHaveText('About Us');

    const services = await page.locator('div> ul[class="leftmenu"]> li > a[href*="services.htm"]');
    await expect(services).toHaveText("Services");

    const products = await page.locator('ul[class="leftmenu"]> li > a[href="http://www.parasoft.com/jsp/products.jsp"]');
    await expect(products).toHaveText("Products");

    const locations = await page.locator('ul[class="leftmenu"]> li> a[href="http://www.parasoft.com/jsp/pr/contacts.jsp"]');
    await expect(locations).toHaveText("Locations");

    const adminPage = await page.locator('ul[class="leftmenu"]> li> a[href*="admin.htm"]');
    console.log(adminPage);
    await expect(adminPage).toHaveText('Admin Page');

    const username = await page.locator('//input[@name="username"]');



})