//******************************** */

import { test } from '@playwright/test';

test('two context', async ({browser})=>
{
 const context1= await browser.newContext();
//     const context2= await browser.newContext();

     const page= await context1.newPage();
//   //   const page2=await context2.newPage();

//   // await page1.goto('https://www.google.com');
//   // await page2.goto('https://www.bing.com');
//   //frame locator
// //  await page1.goto("https://the-internet.herokuapp.com/iframe");
// //   const content=await page1.frameLocator("#mce_0_ifr").getByText("Your content goes here.").textContent();
// //   console.log(content);
//******************************** */

// //file upload

// await page.goto("https://the-internet.herokuapp.com/upload");
// await page.locator("#file-upload").setInputFiles("C:/Users/Komal/OneDrive/Desktop/playwrightInterviewQueByRahulSheety.pdf");
// console.log("file uploaded successfully");

//******************************** */
//handling api response

// import {test,expect} from '@playwright/test';
// test ('api repoanse handling', async ({request})=>{
//  const response= await request.get("https://rahulshettyacademy.com/loginpagePractise/");
//  expect(response.ok()).toBeTruthy();
//  const users=await response.json();
//  console.log(users);

//  //post 
//  const createReponse=await request.post("https://rahulshettyacademy.com/loginpagePractise/", {
//    data: {
//      "name": "John Doe",
//      "email" :"johndoe@example.com"
//    },
//    headers:{
//     'authorization': 'Bearer your_token_here',
//    }
//  });
//  expect (createReponse.ok()).toBeTruthy();
// })
//******************************** */waits in playwrigt
//1. autowait
await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
//2. wait for elememnt state
await page.locator('button').waitFor({state:'visible'});
await page.locator('button').waitFor({state:'hidden'});

//3.wait for load state
await page.waitForLoadState('networkidle');

//4. wait for selector
await page.waitForSelector('button');

//5.wait for function/condition
await page.waitForFunction(()=>
{
  return document.querySelectorAll('.items').length>5;
})
//6.wait for timeout
await page.waitForTimeout(5000);

//7.wait for event
await page.waitForEvent('dialog');

})