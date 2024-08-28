// /// <reference types="cypress" />

// describe('Working with inputs', () => {

//     it('Visit the website', () => {
//         cy.visit('http://zero.webappsecurity.com/login.html') 
//         cy.url().should('include', 'login.html')
//     });

//     it('Should fill username', () => {
//         cy.visit('http://zero.webappsecurity.com/login.html') 
//         cy.get('#user_login').clear()
//         cy.get('#user_login').type('username')
//     });

//     it('Should fill password', () => {
//         cy.visit('http://zero.webappsecurity.com/login.html') 
//         cy.get('input[name="user_password"]').clear() 
//         cy.get('input[name="user_password"]').type('password')
//     });  
    
//     it('Should try to login', () => {
//         cy.visit('http://zero.webappsecurity.com/login.html') 
//         cy.fixture("user").then(user => {
//             const username = user.username
//             const password = user.password
//             cy.login(username, password)
//             cy.get('.alert-error').should('contain.text', 'Login and/or password are wrong.')
//         })
//     });
// });

/// <reference types="cypress" />

describe('Working with inputs', () => {    
    
    it('Succes Login and Checkout', () => {
        cy.visit('https://www.saucedemo.com/', { timeout: 10000 })
        // cy.get('#user-name').clear()
        // cy.get('#user-name').type('standard_user')
        // cy.get('#password').clear() 
        // cy.get('#password').type('secret_sauce')
     
        cy.fixture("user").then(user => {
        const username = user.username
        const password = user.password 
        cy.login_failed(username, password)
        // cy.get('#login-button').click() 
        })
    })
})