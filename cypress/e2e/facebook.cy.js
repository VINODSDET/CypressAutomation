describe('login with facebook', () => {
    it('login to facebook with password', () => {
        cy.visit('https://www.facebook.com/')
        cy.get('#email').type('email') // enter your email
        cy.get('#pass').type('password') // enter your password
        cy.get('#loginbutton').click() // click on login button
    })
})