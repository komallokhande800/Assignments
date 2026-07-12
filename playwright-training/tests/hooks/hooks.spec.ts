import {test,expect} from '@playwright/test'
//hooks are nothing but the preconditions
//1.beforeAll()- this hook is used to execute the code before the execution of all the test cases
//2.afterAll()
//3.beforeEach()- execute the code before the execution of each and every test case.
//4.afterEach()
//if u declare outside the hook it will become global and apply for each group.(after import)
//if u declare inside the test.describe it will become local and apply for that group only