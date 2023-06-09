/// <reference types="cypress" />
describe('handling iframes', ()=>{
    it('handling iframes',()=>{

        cy.visit('https://practice.expandtesting.com/iframe')

        // first way
        cy.scrollTo('bottom')
        cy.iframe('#email-subscribe').scrollIntoView().find('#btn-subscribe').click()
        // Perform actions within an iframe:
        cy.iframe('#my-iframe').within(() => {
            cy.get('.some-element').click();
            cy.get('.another-element').type('Hello, iframe!');
          });
        // Assert content within an iframe:
        cy.iframe('#my-iframe').contains('Welcome to the iframe');
        
    })
})