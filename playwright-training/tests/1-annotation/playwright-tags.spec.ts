import {test,expect} from '@playwright/test'
test('Tags in playwright' , {tag: '@smoke'}, async()=>
{
    console.log("this is tag test case")
})


test('without tag' , async()=>
{
    console.log("this is tag test case")
})

test('with tag2' ,{tag: '@smoke'},async()=>
{
    console.log("this is tag test case")
})