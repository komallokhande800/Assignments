import {test,expect} from '@playwright/test';
test.describe('User API', ()=>
{
let apiContext;
let createUserId:string;

test.beforeAll(async ({playwright})=>
{
    apiContext=await playwright.request.newContext({
        baseURL: '[api.example.com](http://api.exapmle.com)';
        extraHTTPHeader:
        {
            'Authorization': `Bearer ${process.env.API_TOKEN}`,
            'Content-Type': 'application-json'
        }
    }
});
test('Get users return user list',async()=>
{
    const response=await apiContext.get('/api/users');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    
})

}