import {Page, Locator} from "@playwright/test";

export class LoginPage {
    readonly page:Page;
    readonly emailField:Locator;
    readonly passwordFiled:Locator;
    readonly signinCTA :Locator;

    constructor(page:Page){
    this.page = page;
    this.emailField = page.getByTestId('login-email');
    this.passwordFiled=page.getByTestId('login-password');
    this.signinCTA=page.getByTestId('login-submit');

    }


    async navigateToLoginPage(){
        await this.page.goto('https://www.freddiesflowers.com/login')
    }


    async login(email:string, password:string){
        await this.emailField.fill(email);
        await this.passwordFiled.fill(password);
        await this.signinCTA.click();
    }

};


