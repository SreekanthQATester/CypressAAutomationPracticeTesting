/// <reference types="cypress" />
describe('file download', ()=>{

    it('file download', ()=>{
        
        cy.visit('https://practice.expandtesting.com/checkboxes')
       // checking of an element
       cy.get('#checkbox1').check()
       // uncheck of an element
       cy.get('#checkbox1').uncheck()
    })
})