import { HomePage } from "./basePage";

class OrderFlow {
    allDepartmentDropdown: string = '[id="searchDropdownBox"]';
    mainSearchInput: string ='input[id="twotabsearchtextbox"]';
    mainSearchIcon: string = 'input[id="nav-search-submit-button"]';
    searchItemsResult: any ='//span[contains(text(), "Fresh Prepared, Butter Croissan")]';
    amazonFreshLogo: string = '[alt*="Amazon Fresh Logo"]';
    inStockLabel: string ='//span[contains(text(), "In Stock")]';
    learnMoreLink: string ='a[href="https://www.amazon.com/fmc/learn-more"]';
    joinPrimeBtn: string ='[id="a-autoid-0"] input';

    get learnMoreLinkElement() : Cypress.Chainable<JQuery<HTMLElement>> { return cy.get(this.learnMoreLink)};
    get joinPrimeBtnElement() : Cypress.Chainable<JQuery<HTMLElement>> { return cy.get(this.joinPrimeBtn)};

    bannerElements(someText: string): Cypress.Chainable<JQuery<HTMLElement>> {
       return cy.xpath(`//span[contains(text(), "${someText}")]`);
    }

    OrderFlowFromMainDropdown(item:string) : void {
        cy.get(this.allDepartmentDropdown).select('search-alias=amazonfresh', {force:true})
        cy.get(this.mainSearchInput).type(item);
        cy.get(this.mainSearchIcon).click();
        cy.get(this.amazonFreshLogo).should('be.visible');
        cy.xpath(this.searchItemsResult).first().click();
        cy.xpath(this.searchItemsResult).should('be.visible');
        cy.xpath(this.inStockLabel).should('be.visible');
    }
}

export const OrderFlowPage = new OrderFlow();