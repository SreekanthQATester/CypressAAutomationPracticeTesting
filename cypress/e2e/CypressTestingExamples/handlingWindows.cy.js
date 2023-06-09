describe('handling windows',()=>{
    it('Handling windows', ()=>{

        cy.visit('https://practice.expandtesting.com/windows')
        cy.get('.row > a').invoke('removeAttr', 'target').click()
        cy.get('.example', {timeout: 2000}).should('be.visible')
        cy.go('back')
      
    })
})