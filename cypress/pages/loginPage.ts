import { HomePage } from "./basePage";

class Login{
    acctInfoBasePage: string = '#nav-link-accountList';
    userLoginEmailInput: string = 'input[id="ap_email"]';
    loginContinueBtn: string = 'input[id="continue"]';
    userLoginPasswordInput: string = 'input[id="ap_password"]';
    loginSubmitBtn: string = 'input[id="signInSubmit"]';
    signInHeader: string = 'h1';
    loggedInAcctInfoBasePage: string = 'span[id="nav-link-accountList-nav-line-1"]';

get signInHeaderElement() : Cypress.Chainable<JQuery<HTMLElement>> { return cy.get(this.signInHeader)};
get loggedInAcctInfoBasePageElement() : Cypress.Chainable<JQuery<HTMLElement>> { return cy.get(this.loggedInAcctInfoBasePage)};

submitLogin(header: string, loginEmail: string, loginPassword:string): void {
    cy.get(this.acctInfoBasePage).click();
    LoginPage.signInHeaderElement.should('be.visible').and('have.text', header);
    cy.get(this.userLoginEmailInput).type(loginEmail);
    cy.get(this.loginContinueBtn).click();
    cy.wait(1000);
    cy.get(this.userLoginPasswordInput).type(loginPassword);
    cy.get(this.loginSubmitBtn).click();
    cy.wait(1000);
}
}

export const LoginPage = new Login();