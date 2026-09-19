import {test,expect} from "@playwright/test";

import {LoginPage} from "../pages/loginPage";


test.describe('Login tests', ()=>{

      let loginPage: LoginPage

      test.beforeEach(async ({page})=>{

        loginPage = new LoginPage(page);

        await loginPage.navigateToLoginPage();
     });



    test('Valid logincredentials', async({page})=>{
        await loginPage.login(
        'sekhar.gogi+01_test@freddiesflowers.com', 
        'flowers123'
        )
        await expect(page).toHaveURL(/dashboard/);
    })   

    test('Invalid credentials', async({page})=>{

        await loginPage.login('sekhar.gogi+01_test@freddiesflowers.com', 'flowers134567823')

        await expect(page.getByText('/Your email or password/i')).toBeVisible();

    });


});