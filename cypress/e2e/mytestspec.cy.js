describe("My Test Suite", () => {
    it('my first test case positive', () => {
      cy.vistit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      cy.title().should('eq','OrangeHRM')
    })

    it('my first negative test case', () =>{
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      cy.title().should('eq','OrangeHRM1234')
    })
});