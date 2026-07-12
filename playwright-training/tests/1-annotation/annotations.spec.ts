//test.only()
//test.skip()- to skip the testcase
//test.fixme() - is used to makr a specific test case as fixed, it will not execute the testcase and skipped from executing, 
// user know that test case is valid and need to fix it so i don't want to execute it.
//test.slow() 
//test.fail() am expecting testcase to be failed but by mistake if testcase is pass, then i need to validate(if condition true it will fail and if false it will pass)

//test test() represent an independent test method to be executed by playwright
//test.describe()=> test.describe() is used to group related test cases tohgether

import {test,expect} from '@playwright/test'

test.describe('login feature', async()=>
{
   test('Test case 1',async()=>
{
    console.log("first test case")
});
   test('Test case 2', async()=>
{
        console.log("second test case")

});
});
test.describe('signup grp',async()=>
{
    test('Test case 3',async()=>
{
    console.log("first test case")
});
   test('Test case 4', async()=>
{
        console.log("second test case")

})

});



