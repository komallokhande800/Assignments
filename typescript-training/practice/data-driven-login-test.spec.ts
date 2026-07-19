import { test, expect } from '@playwright/test';
interface LoginTestData {
    username: string;
    password: string;
    expectedResult: 'success' | 'error';
    errorMessage?: any;
}
const loginScenarios: LoginTestData[] = [
    {
        username: 'rahulshettyacademy',
        password: 'Learning@830$3mK2',
        expectedResult: 'success',

    },
    {
        username: 'invalid@example.com',
        password: 'invalidPassword',
        expectedResult: 'error',
        errorMessage: 'Incorrect username/password.'
    },
    {
        username: 'valid@example.com',
        password: 'validPassword',
        expectedResult: 'error',
        errorMessage: 'Incorrect username/password.'

    },];

for (const scenario of loginScenarios)
{
    test(`Login with ${scenario.username}- expect ${scenario.expectedResult}`,async ({page})=>
    {
      await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
      await page.locator("#username").fill(scenario.username);
      await page.locator("#password").fill(scenario.password);
      await page.locator("#terms").click();
      await page.locator("#signInBtn").click();
      if(scenario.expectedResult === 'success')
        {
            await expect(page).toHaveURL(/shop/)
        } 
     else{
        await expect(page.getByText("Incorrect username/password.")).toContainText(scenario.errorMessage)
     }
    })
}

