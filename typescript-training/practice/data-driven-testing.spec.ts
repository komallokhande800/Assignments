import {test} from '@playwright/test';
const testdata=[
    {username:"rahul", password:"learning"},
    {username:"komal", password:"learning"},
    {username:"suresh", password:"learning"}
];

testdata.forEach(data=>
{
    test(`login with ${data.username}` , async({page})=>
    {
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        await page.fill("#username", data.username);
        await page.fill("#password", data.password);
        await page.click("#signInBtn");
        
    });});