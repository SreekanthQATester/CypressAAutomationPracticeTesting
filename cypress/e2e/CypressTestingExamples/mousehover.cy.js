/// <reference types="cypress" />
describe('Drag and drop', ()=>{
    it('Drag and drop',()=>{

        // cy.visit('https://practice.expandtesting.com/hovers')

        // cy.get("img[alt='User Avatar']").first().invoke('show').trigger('mouseover').wait(3000);
        // cy.contains('View profile').first().click()
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    
        cy.get('#mousehover').invoke('show').click();
        cy.wait(5000)
        cy.get("a[href='#top']").click({ force: true });
        //cy.contains('Reload').click({force: true})

    })
})