/// <reference types="cypress" />
describe('go ibibo',()=>{

    it('test case for go ibibo',()=>{

        cy.visit('https://rahulshettyacademy.com/dropdownsPractise/')
        cy.wait(5000)
            // count no.of checkboxes in a page
            cy.get('input[type="checkbox"]').should('have.length').then(($count)=>{

                cy.log('count of checkboxes', $count)
            })


    })
})