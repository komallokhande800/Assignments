import { test, expect } from '@playwright/test'

test('tools QA', async ({ page }) => {

    // 1. Enter URL and Launch the application (https://demoqa.com/automation-practice-form)
    await page.goto("https://demoqa.com/automation-practice-form");

    // 2. Wait for Page-load
    //await page.waitForLoadState('networkidle');
    const pageHeader = await page.locator('//h1[text()="Practice Form"]');
    await expect(pageHeader).toBeVisible();
    // 3. Enter First name and Last name
    const firstName = await page.locator("#firstName");
    await firstName.fill("komal")

    const lastName = page.getByPlaceholder('Last Name');
    await lastName.fill("lokhande")
    // 4. Enter Email

    const email = await page.locator('input[id="userEmail"]');
    await email.fill("abc@gmail.com");

    // 5. Select Gender (Male)


    await selectGender(page, 'Female');

    // 6. Enter mobile number
    await page.getByPlaceholder("Mobile Number").fill("1231231231");

    // 7.Select DOB (1-Feb-1991)
    await selectDob(page, "1994", "May", "19");


    // 8.Search and Select Computer Science and English
    const subjects: string[] = ["Computer Science", "English"];
    await selectSubject(page, subjects);
    // 9.Select Hobbies as Sports and Reading

    const Hobbies: string[] = ["Sports", "Reading"];
    await selectHobbies(page, Hobbies);
    // 10.Upload photo
    const chooseFile = await page.locator('//input[@id="uploadPicture"]');
    const filePath = "C:/AutomationTraining/playwright-training/tests/files/photo.png";
    await chooseFile.setInputFiles(filePath);

    // 11.Submit Details

    const submitt = await page.locator('//button[text()="Submit"]');
    await submitt.click();
});


async function selectGender(page: any, option: string): Promise<void> {
    const gender = await page.locator(`//label[text()="${option}"]`)
    await gender.click();
}


async function selectDob(page: any, year: string, month: string, date: string): Promise<void> {
    const dob = await page.locator('#dateOfBirthInput');
    await dob.click();

    const monthDrop = page.locator('select[class="react-datepicker__month-select"]');
    await monthDrop.selectOption({ label: month })


    const yearDrop = page.locator('select[class="react-datepicker__year-select"]');
    await yearDrop.selectOption({ label: year })

    const Date = page.locator(`//div[contains(@aria-label,"${month}") and text()="${date}"]`);
    await Date.click();
}
async function selectSubject(page: any, options: string[]): Promise<void> {
    const subjectsInput = await page.locator('//div[contains(@class,"subjects-auto-complete__input")]');
    await subjectsInput.click();

    const subject = await page.locator('//input[@id="subjectsInput"]')
    for (const option of options) {
        await subject.fill(option);
        await subject.press('Enter')
    }
}

async function selectHobbies(page: any, options: string[]): Promise<void> {

    for (const option of options) {
        const hobby = await page.locator(`//label[text()="${option}"]`);

        await hobby.click();
    }
}