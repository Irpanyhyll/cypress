/// <reference types="cypress" />

describe('Working with inputs', () => {

    // it('Visit the website', () => {
    //     cy.visit('https://www.saucedemo.com/', { timeout: 10000 })
    // });
  
    // it('Should fill username', () => {
    //     cy.visit('https://www.saucedemo.com') 
    //     cy.get('#user-name').clear()
    //     cy.get('#user-name').type('standard_user')
    // });

    // it('Should fill password', () => {
    //     cy.visit('https://www.saucedemo.com') 
    //     cy.get('#password').clear() 
    //     cy.get('#password').type('secret_sauce')
    // });        

    // it('Click button login', () => {
    //     cy.visit('https://www.saucedemo.com') 
    //     cy.get('#login-button').click() 
    // });        
    
    it('Succes Login and Checkout', () => {
        cy.visit('https://www.saucedemo.com/', { timeout: 10000 })
        cy.get('#user-name').clear()
        cy.get('#user-name').type('standard_user')
        cy.get('#password').clear() 
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click() 
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('.shopping_cart_link').click()

    });
    
});