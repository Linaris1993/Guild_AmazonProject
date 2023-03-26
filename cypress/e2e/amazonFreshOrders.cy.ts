import { HomePage } from '../pages/basePage';
import { LoginPage } from '../pages/loginPage';
import { OrderFlowPage } from '../pages/orderFlow';
import { ValidLoginCredentials } from './model';

describe('Verify shopping in Amazon Fresh is eligible only for accounts with Prime Membership', () => {
    before(() => {
        HomePage.visit();
        cy.clearAllCookies();
    })

    const signInH1Text: string =  '\n            Sign in\n          ';
  
    it('TC-01 Happy Path for opening "Fresh for Prime Membership banner" by choosing Amazon Fresh department in central menu dropdown and typing item in main search field', () => {
    cy.fixture<{ validLoginCredentials: ValidLoginCredentials[] }>("example.json")
        .its("validLoginCredentials")
        .then((validLoginCredentials) => {
            validLoginCredentials.forEach(validLoginCredentials => {

        LoginPage.submitLogin(signInH1Text, validLoginCredentials.userLoginEmail, validLoginCredentials.userLoginPassword);
        HomePage.amazonLabelElement.should('be.visible');
        LoginPage.loggedInAcctInfoBasePageElement.should('have.text', `Hello, ${validLoginCredentials.userFirstName}`);
        })

        OrderFlowPage.OrderFlowFromMainDropdown('Fresh Brand - All Butter Mini Croissants');
        OrderFlowPage.bannerElements(" \n\n\n    FREE 2-hour delivery on orders over $150\n with Prime\n\n\n ").should('be.visible');
        OrderFlowPage.bannerElements("To add to cart, join Prime").should('be.visible');
        OrderFlowPage.bannerElements("A Prime membership is required to shop Amazon Fresh on Amazon.").should('be.visible');
        OrderFlowPage.learnMoreLinkElement.should('be.visible');
        OrderFlowPage.joinPrimeBtnElement.should('be.visible');
        OrderFlowPage.bannerElements(" Cancel Anytime ").should('be.visible');
    })    
})
})