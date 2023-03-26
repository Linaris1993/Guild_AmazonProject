import { HomePage } from '../pages/basePage';
import {LoginPage} from '../pages/loginPage';

const userFirstName: string = 'test';
const userLoginEmail: string = 'testamazonproject@gmail.com';
const userLoginPassword: string = '1234@aaaaa';
const signInH1Text: string = '\n            Sign in\n          ';

describe('Login with valid credentials', () => {
    beforeEach(() => {
    HomePage.visit()
    })
  
    it('Happy path Login', () => {
      LoginPage.submitLogin(signInH1Text, userLoginEmail, userLoginPassword);
      HomePage.amazonLabelElement.should('be.visible');
      LoginPage.loggedInAcctInfoBasePageElement.should('have.text', `Hello, ${userFirstName}`);
    })
});