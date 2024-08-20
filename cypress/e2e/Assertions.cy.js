//implicit assertions
describe('assertions', () => {
    it('implicit assertion by using should & and', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('include', 'auth/login')
        .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('not.eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/122')
        .and('contain', 'auth/login')
    })
})