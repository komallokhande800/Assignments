// Assignment 16
import {test,expect} from '@playwright/test'

test('Alerts assignment 16', async({page})=>
{

// 1. Enter URL and Launch the application (https://demoqa.com/alerts)
await page.goto('https://demoqa.com/alerts');

// 2. Locate Alert buttons to trigger the alerts
const firstAlertButton= await page.locator('#alertButton');
const confirmButton= await page.locator('#confirmButton');
const promtButtonButton= await page.locator('#promtButton');


// 3. Click on the information alert and copy the alert message and then select OK button
 page.once('dialog', async dialog=>
 {
    console.log(dialog.message());
    await dialog.accept();
 }
 );
 await firstAlertButton.click();

// 4. Click on the Confirmation alert, copy the alert message, and select the Cancel button.
page.once('dialog', async dialog=>
{
   console.log(dialog.message());
   dialog.dismiss();
}
);
 await confirmButton.click();
 
// 5. Click on the prompt alert. Copy the alert message. Enter text. Then Select OK button.

page.once('dialog', async dialog2=>
{
   console.log(dialog2.message());
   dialog2.accept('komal lokhande');
}
);
await promtButtonButton.click();



})

