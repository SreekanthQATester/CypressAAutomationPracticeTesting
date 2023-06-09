/// <reference types="cypress" />


describe('Auto compplete', ()=>{
    it('Auto compplete',()=>{

        cy.visit('https://practice.expandtesting.com/autocomplete')
        cy.get('#country').type('Ind')
        cy.pause()
        cy.get('#countryautocomplete-list > div > strong').first().click()
        cy.get('#countryautocomplete-list > div > strong').should('be.enabled')


    })
})