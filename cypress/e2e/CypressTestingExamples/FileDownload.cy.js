/// <reference types="cypress" />
describe('file download', ()=>{

    it('file download', ()=>{
        
        cy.visit('https://practice.expandtesting.com/download')
        // click on file you wanted to download
        cy.contains('some-file.json').click()

    })
})