import { test, expect } from '@playwright/test'
test('web actions and assertions', async ({ page }) => {
    await page.goto("https://parabank.parasoft.com/parabank/index.htm");

    //check if the element is visible
    const isElementVisible = await expect(element).toBeVisible();
    //check if the element is enable
    const isElementEnabled = await expect(element).toBeEnabled();


    //check if the element is already selected if it is a checkbox
    const isElementChecked = await expect(element).toBeChecked();

    //check if the element is disappeared
    const isElementHidden = await expect(element).toBeHidden();

    //check if the element is visible
    //label
    const button = awiat page.locator('button');
    await expect(button).toBe('Submit')
    //click on the button
    //RIght click
    await button.click({ button: 'right' })
    //Duble click
    await button.dblclick();
    //mouse over
    await button.hover();
    //scroll to the button
    await button.scrollIntoViewIfNeeded();
    //force click on the button if the buttob is not responsding or in a diabled state.
    await button.click({ force: true })
    //Drag and drop the button to another element
    const targetElement = page.locator('div#target');
    await button.dragTo(targetElement)

    //TextBox
    const textbox=await page.locator('njn');
    //placeholder of the text
    const placeholder=await textbox.getAttribute("placeholder");
    await expect(placeholder).toBe("First Name")
    //clear the text if ther eis any text already there
    await textbox.clear();
    //type the text into text box
    await textbox.fill("kkkjk");
    //verify the text entered into the text box

    //press function keys within the text box
    await textbox.press('Enter')
    await textbox.press('Control+A')

    ////checkbox
  //dropdown
  const dropdown=await page.locator("dorwmlkos");
  await dropdown.selectOption({label: 'Available Funds'})
       await dropdown.selectOption({value: 'Available Funds'})
  await dropdown.selectOption({index: 0});

const selectedOption=await dropdown.inputValue();
await expect(selectedOption).toBe('Availbale Funds')

//extract all dropdown option
const options=await page.locator("option").allTextContents();
const expetcedValues=['option1','option2','option3']
await expect(options).toBe(expetcedValues)

//dropdown is multiseletct
const isMultiselect=await.dropdown.getAttribute('multiple');
if(isMultiselect!==null)
{
    const selectedOption=await dropdown.inputValue();
//same as dropdown
}
})