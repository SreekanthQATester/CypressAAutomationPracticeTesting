/// <reference types="cypress" />


describe('Notification Message', ()=>{
    it('Notification Message',()=>{

        cy.visit('https://practice.expandtesting.com/radio-buttons')
        cy.contains('Red').click()
        cy.get("label[for='yellow']").click()

      

        
    
    })
})