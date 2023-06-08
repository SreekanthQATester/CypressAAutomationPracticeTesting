/// <reference types="cypress" />


describe('web inputs', ()=>{
    it('Web Inputs testcase',()=>{

        cy.visit('https://practice.expandtesting.com/inputs')
        // enter data if element is visible

        if(cy.get("label[for='input-number']").should('be.visible')){
            cy.get('#input-number').last().scrollIntoView().clear().type(143)
        }
       
        cy.get("label[for='input-text']").should('be.visible').then(($enterData)=>{
            
            cy.get('#input-text').last().scrollIntoView().clear().type('Iam Legend')
            // verifying the value that we aleady entered
            cy.get('#input-text').should('have.value', 'Iam Legend')
        
    })
    
    })
})