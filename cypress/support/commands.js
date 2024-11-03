// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login_failed', (username, password) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#user-name').clear()
    cy.get('#user-name').type('standar_user')

    cy.get('#password').clear() 
    cy.get('#password').type('secret_sauce')

    cy.get('#login-button').click()

    cy.get('h3').should('contain', 'Epic sadface: Username and password do not match any user in this service')
}) 



Cypress.Commands.add('login', (username, password) => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type(username);
    cy.get('#password').type(password);
    cy.get('#login-button').click();
  });
  
  Cypress.Commands.add('addItemToCart', (itemIndex = 0) => {
    cy.get('.inventory_item').eq(itemIndex).find('button').click();
  });
  
  Cypress.Commands.add('checkout', (firstName, lastName, postalCode) => {
    cy.get('.shopping_cart_link').click();
    cy.get('.checkout_button').click();
    cy.get('#first-name').type(firstName);
    cy.get('#last-name').type(lastName);
    cy.get('#postal-code').type(postalCode);
    cy.get('#continue').click()
    cy.get('#finish').click()
  });
  
  Cypress.Commands.add('completePurchase', (username, password, firstName, lastName, postalCode) => {
    cy.login(username, password);
    cy.addItemToCart(); // Default itemIndex = 0, bisa diubah jika ingin memilih item lain
    cy.checkout(firstName, lastName, postalCode);
  });
  

  Cypress.Commands.add('loginViaAPI', (
    email = Cypress.env('userEmail'),
    password = Cypress.env('userPassword')
  ) => {
    cy.request('POST', `https://practice.expandtesting.com/notes/api/users/login`, {
      email : 'test@mail11.com',
      password : '1234567'
    }).then((response) => {
      expect(response.status).equal(200)
      expect(response.body["message"]).to.eq("Login successful");
    });
  });
  