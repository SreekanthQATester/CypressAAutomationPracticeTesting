describe('keypress', ()=>{

    it('Key press', ()=>{
        cy.visit('https://practice.expandtesting.com/key-presses')
        
       // cy.get('#target').type('tab')
     
        cy.get('#target').type('ad').type('{enter}')

    })
})