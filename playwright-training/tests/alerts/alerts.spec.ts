import {test, expect} from '@playwright/test';
test('all Types of alert handling', async({page})=>
{
await page.goto("https://demoqa.com/alerts");
const normalALert= await page.locator('//button[@id="alertButton"]');

page.once('dialog', async dialog=>
{
    await dialog.accept();

});
await normalALert.click();

//*************************8 */
const alertWIth5SecWait= await page.locator('#timerAlertButton');
// page.once('dialog', async dialog=>
// { 
//     await dialog.accept();
// }
// );
await alertWIth5SecWait.click();
//**************************** */

const alertWithDismiss=await page.locator('#confirmButton');
// page.once('dialog', async dialog=>
// {
//     await dialog.dismiss();

// }
// );
await alertWithDismiss.click();
//**************************** */

const alertWithPromiss=await page.locator('#promtButton');
page.once('dialog', async dialog=>
{
    await dialog.accept('Hello ....')
    //copy text from alert 
    //const alertMessage=dialog.message();
}
);
await alertWithPromiss.click();


});