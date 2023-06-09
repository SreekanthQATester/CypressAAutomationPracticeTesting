describe('file upload', ()=>{

    it('file upload', ()=>{
        const textFile= "narayanan-palani_cypressio.pdf"
        cy.visit('https://practice.expandtesting.com/upload')
        cy.get('#file-upload').attachFile(textFile)
        cy.get('#file-submit').click()
        cy.get('h1').should('be.visible')

    })
})