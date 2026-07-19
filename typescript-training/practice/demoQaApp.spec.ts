import { test, expect } from '@playwright/test';
test('Demo Qa site', async ({ page }) => {
    await page.locator('#firstName').fill('komal');
    await page.locator('#lastName').fill('komal');
    await page.locator('#userEmail').fill('komal@gmail.com');
    await selectGender(page, "Female")
    await page.locator('#userNumber').fill('1231231231');
    await selectDate(page, "1990", "May", "13")
    const uploadFile = await page.locator('#uploadPicture');
    const filePath = '/files/photo.png';
    await uploadFile.setInputFiles(filePath);






});

async function selectGender(page: any, option: string): Promise<void> {
    const gender = await page.locator(`//label[text()="${option}"`);
    await gender.click();
}

async function selectDate(page: any, year: string, month: string, date: string): Promise<void> {
    await page.locator('#dateOfBirthInput').click();
    const monthDrop = page.locator('select[class="react-datepicker__month-select"]');
    await monthDrop.selectOption({ label: '19' });

    const yearDrop = page.locator('select[class="react-datepicker__year-select"]');
    await yearDrop.selectOption({ label: '1990' })

    const Date = page.locator(`//div[contains(@aria-label,"${month}") and text()="${date}"]`);
    await Date.click()
}
async function sleectSubject(page:any, subject:string[]):Promise<void>
{
    await page.locator('//div[contains(@class,"subjects-auto-complete__input")]').click
}