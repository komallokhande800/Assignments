import { test, expect } from '@playwright/test'

test('Parabank application', async ({ page }) => {
    await page.goto("https://parabank.parasoft.com/parabank/index.htm");

    //2.verify application logo is displayed
    const logo = await page.locator('.logo');
    await expect(logo).toBeVisible();

    //3.Verify application caption displayed as "Experience the difference"
    const expText = await page.getByText("Experience the difference");
    await expect(expText).toHaveText('Experience the difference');
    // const expectedText:String='Experience the difference';
    // await expect(expText).toBe(expectedText);

    //4.Enter invalid username
    const username = await page.locator('//input[@name="username"]');
    await username.fill("invalidUsername");

    //5.Enter empty Password

    const passowrd = await page.locator('//input[@name="password"]');
    await passowrd.fill("");

    // 6.Click on login button
    const login = await page.locator('//input[@type="submit"]');
    await login.click();


    // 7.Verify the error message "Please enter a username and password."
    const error = await page.getByText('Please enter a username and password.');
    await expect(error).toHaveText('Please enter a username and password.');

    // 8.Click on admin page link
    const adminPage = page.getByText('Admin Page');
    await adminPage.click();

    // 9.select the option "soap" from dba mode radio button
    await selectAccessMode(page, "soap");

    // 10.Scroll to element dropdown
    const loanProviderDropdown = page.locator("#loanProvider");
    await loanProviderDropdown.scrollIntoViewIfNeeded();
    // 11.Select the option web service from the dropdown
    await loanProviderDropdown.selectOption({ label: 'Web Service' });

    // 12.click on submit button
    await page.locator('form[id="adminForm"]>input.button').click();

    // 13.verify submission is successful by validating success message
    const successMsg = await page.getByText('Settings saved successfully.');
    await expect(successMsg).toHaveText('Settings saved successfully.');
    //await expect(SuccessMsg).toBeVisible();

    // 14.Click on services page link
    const services = await page.locator('ul[class="leftmenu"]>li> a[href*="services.htm"]');
    await services.click();

    // 15.wait for service page
    const availBookstoreHeading = await page.getByText('Available Bookstore SOAP services:');
    //await availBookstoreHeading.waitFor({'visible': 'Available Bookstore SOAP services:'})

    // 16.Scroll down till bookstore services table
    const bookstoreServiceTable = await page.locator('div[id="bodyPanel"]>div[id="rightPanel"]>table>tbody').nth(1);
    await bookstoreServiceTable.scrollIntoViewIfNeeded();

    // 17.get total rows of books store services table
    const rows = page.locator('//span[text()="Bookstore services:"]/following-sibling::table[1]//tbody//tr');
    const totalRows = await rows.count();

    // 18.get total columns of books store services table
    const column = page.locator('//span[text()="Bookstore services:"]/following-sibling::table[1]//tbody//tr[1]//td');
    const totalColumn = await column.count();

    // 19.Print table data (row wise and column wise data)

    for (let i: number = 1; i <= totalRows; i++) {
        for (let c: number = 1; c <= totalColumn; c++) {
            const cell = await page.locator(`//span[text()="Bookstore services:"]/following-sibling::table[1]//tbody//tr[${i}]//td[${c}]`);
            const cellData = await cell.textContent();
            console.log(`Row ${i} column ${c} data is : ${cellData}`);
        }

    }
})

async function selectAccessMode(page: any, option: string): Promise<void> {
    const dbaMode = await page.locator(`input[value="${option}"]`);
    await dbaMode.click();
    console.log(`Selected option from dba mode radio button is: ${option}`);
}