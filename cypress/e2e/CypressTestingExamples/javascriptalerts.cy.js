/// <reference types="cypress" />
describe('javascript alerts', () => {

    it('javascript alerts', () => {

        cy.visit('https://practice.expandtesting.com/js-dialogs')

        // // handle javascript alert
        // cy.get('#js-alert', {timeout: 3000}).click().then(()=>{

        //     cy.on('window:alert',($alerttext)=>{

        //         expect($alerttext).eq('I am a Js Alert')
        //     })

    })
    it('javascript alert confirm alert', () => {

        cy.visit('https://practice.expandtesting.com/js-dialogs')
        cy.get('#js-confirm').click()
        cy.on('window:confirm',()=>false)
        cy.get('#dialog-response').should('have.text', 'Cancel')
        

    })
    it('javascript prompt alert', () => {

        cy.visit('https://practice.expandtesting.com/js-dialogs')

        cy.window().then((win)=>{

            cy.stub(win,'prompt').returns('I am sreekanth')
            cy.on('window:prompt',()=>false)
        })
        cy.get('#js-prompt').click()
      
        

    })
    it.only('javascript authentication alert', () => {

     //   cy.visit('https://the-internet.herokuapp.com/basic_auth', {auth: {username: "admin", password:"admin"}})

      //  cy.get('p').should('have.contain', 'Congratulations')

        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        cy.get('p').should('have.contain', 'Congratulations')

    })


})
