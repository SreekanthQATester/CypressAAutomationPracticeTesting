describe('file upload', ()=>{

    it('file upload', ()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        

        cy.contains('Open Tab').invoke('removeAttr', 'target').click()

       // cy.wait(5000)
        cy.go('back')

    })
})