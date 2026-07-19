import {test} from '@playwright/test';

test('handle dialog', async({page})=>
{
    page.on('dialog', async dialog=>
    {
        console.log(dialog.message());
        await dialog.accept();

    })


page.on('dialog', async dialog=>
{
    await dialog.accept('My input text');
}
);

const [popup] = await Promise.all([
    page.waitForEvent('popup'),
    page.click('a[target="_blank"]')
]);
await popup.waitForLoadState();
await popup.locator('h1').textContent();
});

