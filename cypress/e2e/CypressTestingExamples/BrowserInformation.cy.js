/// <reference types="cypress" />


describe('web inputs', ()=>{
    it('Web Inputs testcase',()=>{

        cy.visit('https://practice.expandtesting.com/my-browser')
        cy.contains('Show Browser Information').click()
        cy.contains('User Agent').should('be.visible')



    })
})