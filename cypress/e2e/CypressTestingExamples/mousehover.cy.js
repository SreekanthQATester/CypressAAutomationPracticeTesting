/// <reference types="cypress" />
describe('Drag and drop', ()=>{
    it('Drag and drop',()=>{

        cy.visit('https://practice.expandtesting.com/hovers')

        cy.get("img[alt='User Avatar']").first().invoke('show').trigger('mouseover').wait(3000);
        cy.contains('View profile').first().click()
    })
})