import {test,expect} from '@playwright/test'

test('Demo Qa Frames', async({page})=>
{


// 1. Enter URL and Launch the application (https://demoqa.com/frames)
    await page.goto('https://demoqa.com/frames');

// 2. Locate Main window element

const mainFrame=await page.frameLocator('iframe[id="frame1"]');
const sampleText= await mainFrame.locator('//h1[text()="This is a sample page"]').textContent();
await expect(sampleText).toContain("This is a sample page");

// Locate the frame and store in the variable

const Frame2=await page.frameLocator('iframe[id="frame2"]');

const sampleText2= await Frame2.locator('//h1[text()="This is a sample page"]').allTextContents();
await expect(sampleText2).toContain("This is a sample page");
// 3. Locate Frame Element
// 4. Copy and Print text from frame element
console.log(`Text from frame 2 is ${sampleText2}`)
// 5. Copy and Print text from main window element
console.log(`Text from frame 1 is ${sampleText}`)

});