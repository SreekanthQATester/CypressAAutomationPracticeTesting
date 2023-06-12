/// <reference types="cypress" />


describe('web inputs', ()=>{
    it('Web Inputs testcase',()=>{

        cy.visit('https://www.spicejet.com/')
        cy.contains('Mon, 19 Jun 2023').click()
        cy.get('body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(4) > div:nth-child(2) > div:nth-child(1)').click()
    
    
    })
})




