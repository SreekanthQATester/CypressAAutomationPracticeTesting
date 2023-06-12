
/// <reference types="cypress" />


describe('Auto compplete', ()=>{
    it('Auto compplete',()=>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get("table#product:nth-child(1)>tbody>tr:nth-child(5)>td:nth-child(2)").nextUntil().then(($eletext)=>{

            const eletext = $eletext.text()
            eletext.click
            cy.log(eletext)
        })


    })
})


