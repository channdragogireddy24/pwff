import {Locator, Page, expect} from'@playwright/test';

export class SignUp {
    readonly page:Page;
    readonly JOinTheClubCTA:Locator;
    readonly GetStarted:Locator;
    readonly continueCTA :Locator;
    readonly emailFiled:Locator;
    readonly passwordFiled:Locator;
    readonly continueToDeliveryCTA:Locator;
    


    constructor(page:Page){
        this.page = page;
        this.JOinTheClubCTA = page.getByRole('link', {name:'JOIN THE CLUB'}).first();
        this.GetStarted=page.getByRole('link', {name:'Get Started'})
        this.continueCTA=page.getByRole('button', {name:'CONTINUE'});
        this.emailFiled=page.getByLabel('Email');
        this.passwordFiled=page.getByTestId('detail-password');
        this.continueToDeliveryCTA=page.getByRole('button', {name:'CONTINUE TO DELIVERY'});
    }

    async landingPage(){
        await this.page.goto('https://www.freddiesflowers.com')
    }

    async joinTheClub(){
        await this.JOinTheClubCTA.click()

    }



    async flowerSubscriptionsPage(){
        await this.GetStarted.click()
    }

    async verifyChooseSubscriptionURL(){
            await expect(this.page).toHaveURL(/\/flower-subscriptions\/choose-subscription\/?$/)

    }

    async chooseSubscriptionContinueCta(){
        await this.continueCTA.click();
    }

    async verifyCheckoutDetails(){
        await expect(this.page).toHaveURL(/\/checkout\/details\/?$/);
    }

    async fillDetailsPage(email:string, password:string){
        await this.emailFiled.fill(email);
        await this.passwordFiled.fill(password);
        await this.continueToDeliveryCTA.click();

    }

    async verifyDeliverydetailsURL(){
        await expect(this.page).toHaveURL(/\/delivery\/?$/);
    }

    
}




    
 