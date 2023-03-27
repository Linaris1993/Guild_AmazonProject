class BasePage {

    amazonLabel: string = 'a[aria-label="Amazon"]';
    amazonFreshLogo: string = '[alt*="Amazon Fresh Logo"]';
   
    get amazonLabelElement() : Cypress.Chainable<JQuery<HTMLElement>> { return cy.get(this.amazonLabel)};
    get amazonFreshLogoElement() : Cypress.Chainable<JQuery<HTMLElement>> { return cy.get(this.amazonFreshLogo)};

    visit(): void {
        cy.visit("https://www.amazon.com");
    }
}

export const HomePage = new BasePage();