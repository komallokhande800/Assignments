import {test, expect, chromium} from '@playwright/test'

test('Browser action', async ({ })=>
{
 // Launch the chrome browser engine. (Chromium, firefox, webkit)
    const browserEngine= await chromium.launch({channel: 'msedge', headless: false});

    //launch the browser context within the browser engine. (kind of incognito)
    const browserContext= await browserEngine.newContext();

    //clear all the cookies within the browser context.
    await browserContext.clearCookies();

    //launch the new page within the browser conetxt(tab)
    const page=await browserContext.newPage();

    //maximize the page to a specific resolution(1920,1080)
    await page.setViewportSize({width: 1980, height: 1080})

    //launch the application

    await page.goto("https://www.google.com")

    //verify the application is launched properly
    await expect(page).toHaveTitle('Google')

    await page.goto("https://playwright.dev/")

    await page.goBack();
    await page.goForward();
    await page.reload();

    //launch the new tab witjin the same window

    const newPage= await browserContext.newPage();

    //launch the application on new tab
    await newPage.goto("https://selenium.com")

    //go back to the previous tab ad display the previous application
    await page.bringToFront();

//capture the url display in current window








})