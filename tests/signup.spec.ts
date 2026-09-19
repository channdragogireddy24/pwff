import {test,expect} from '@playwright/test';

import { SignUp } from '../pages/signupPage';

test('Signup', async ({page})=>{
    const signUp = new SignUp(page);

    await signUp.landingPage()

    await signUp.joinTheClub();

    await signUp.flowerSubscriptionsPage();
    await signUp.verifyChooseSubscriptionURL();
    await signUp.chooseSubscriptionContinueCta();
    await signUp.verifyCheckoutDetails();

    await signUp.fillDetailsPage(
        'sekhar.gogi+19s_test@freddiesflowers.com',
        'flowers123',
    )
    await signUp.verifyDeliverydetailsURL();
})