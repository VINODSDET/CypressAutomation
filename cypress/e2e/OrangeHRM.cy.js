describe('Assertion Demo',() =>{
    it('implicit assertion',() =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('include','auth/login') // implicit assertion using include keyword with using url method
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') // implicit assertion using eq keyword with using url method
        cy.url().should('not.eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') // implicit assertion using not.eq keyword with using url method
        cy.url().should('contain','auth/login') // implicit assertion using contain keyword with using url method
    })
})