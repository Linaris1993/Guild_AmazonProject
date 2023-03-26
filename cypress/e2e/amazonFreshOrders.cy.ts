import { HomePage } from '../pages/basePage';
import { LoginPage } from '../pages/loginPage';
import { OrderFlowPage } from '../pages/orderFlow';

describe('Verify shopping in Amazon Fresh is eligible only for accounts with Prime Membership', () => {
    before(() => {
        HomePage.visit()
    })

    const userFirstName: string = 'test';
    const userLoginEmail: string = 'testamazonproject@gmail.com';
    const userLoginPassword: string = '1234@aaaaa';
    const signInH1Text: string = '\n            Sign in\n  ';
  
    it('TC-01 Happy Path for opening "Fresh for Prime Membership banner" by choosing Amazon Fresh department in central menu dropdown and typing item in main search field', () => {
        LoginPage.submitLogin(signInH1Text, userLoginEmail, userLoginPassword);
        HomePage.amazonLabelElement.should('be.visible');
        LoginPage.loggedInAcctInfoBasePageElement.should('have.text', `Hello, ${userFirstName}`);

        OrderFlowPage.OrderFlowFromMainDropdown('mini croissants');
        OrderFlowPage.bannerElements(" \n\n\n    FREE 2-hour delivery on orders over $150\n with Prime\n\n\n ").should('be.visible');
        OrderFlowPage.bannerElements("To add to cart, join Prime").should('be.visible');
        OrderFlowPage.bannerElements("A Prime membership is required to shop Amazon Fresh on Amazon.").should('be.visible');
        OrderFlowPage.learnMoreLinkElement.should('be.visible');
        OrderFlowPage.joinPrimeBtnElement.should('be.visible');
        OrderFlowPage.bannerElements(" Cancel Anytime ").should('be.visible');
    })    
})