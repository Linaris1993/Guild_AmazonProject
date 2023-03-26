///<reference types="cypress" />

// declare global {
//     namespace Cypress {
//         interface Chainable {
//             login(email: string, password: string): Chainable<void>;
//         }
//     }
// }
// Cypress.Commands.add('login', (email:string, password: string) => {
//     cy.get('#userName').type(email);
//     cy.get('#password').type(password);
//     cy.get('#login').click();
// });