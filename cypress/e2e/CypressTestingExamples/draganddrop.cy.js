/// <reference types="cypress" />
describe('Drag and drop', ()=>{
    it('Drag and drop',()=>{

        cy.visit('https://practice.expandtesting.com/drag-and-drop')

        cy.get('#column-a').drag('#column-b')
        cy.wait(3000)
        cy.get('#column-b').drag('#column-a')
     
        cy.visit('https://practice.expandtesting.com/drag-and-drop-circles')
        cy.get('#source > div.red').drag('#target')
    })
})