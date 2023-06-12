/// <reference types="cypress" />



describe('Drag and drop', ()=>{
    it('Drag and drop',()=>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // cy.get('button').then((count)=>{
        //     cy.log(count.length)
        //     cy.log(count.length)
        // })
        cy.get('#dropdown-class-example', {timeout:3000}).select('Option2')
     
        cy.get('#dropdown-class-example', {timeout:3000}).select('Option3')
        cy.get('#dropdown-class-example', {timeout:3000}).select('Option1')
//         cy.get('#dropdown-class-example', { timeout: 3000 })
//   .select('Option2')
//   .then(() => {
//     cy.get('#dropdown-class-example', { timeout: 3000 })
//       .select('Option3')
//       .then(() => {
//         cy.get('#dropdown-class-example', { timeout: 3000 })
//           .select('Option1')
//           .then(() => {
//             // Other actions or assertions after selecting all options
//           });
//       });
//   });

    })
})