import { use } from 'chai';
import { HomePage } from '../pages/basePage';
import {LoginPage} from '../pages/loginPage';
import { ValidLoginCredentials } from './model';

const signInH1Text: string = '\n            Sign in\n          ';

describe('Login with valid credentials', () => {
    beforeEach(() => {
    HomePage.visit();
    cy.clearAllCookies();
    });
  
    it('Happy path Login', () => {
      cy.fixture<{ validLoginCredentials: ValidLoginCredentials[] }>("example.json")
      .its("validLoginCredentials")
      .then((validLoginCredentials) => {
        validLoginCredentials.forEach(validLoginCredentials => {
          cy.log(validLoginCredentials.userFirstName);
          cy.log(validLoginCredentials.userLoginEmail);
          cy.log(validLoginCredentials.userLoginPassword);
   
        LoginPage.submitLogin(signInH1Text, validLoginCredentials.userLoginEmail, validLoginCredentials.userLoginPassword);
        HomePage.amazonLabelElement.should('be.visible');
        LoginPage.loggedInAcctInfoBasePageElement.should('have.text', `Hello, ${validLoginCredentials.userFirstName}`);
        })
      })
      })
  });