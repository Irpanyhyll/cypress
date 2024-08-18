/// <reference types="cypress" />

describe('Working with inputs', () => {

    it('Visit the website', () => {
        cy.visit('http://zero.webappsecurity.com/login.html') 
        cy.url().should('include', 'login.html')
    });

    it('Should fill username', () => {
        cy.visit('http://zero.webappsecurity.com/login.html') 
        cy.get('#user_login').clear()
        cy.get('#user_login').type('username')
    });

    it('Should fill password', () => {
        cy.visit('http://zero.webappsecurity.com/login.html') 
        cy.get('input[name="user_password"]').clear() 
        cy.get('input[name="user_password"]').type('password')
    });  
    
    it('should check the "Keep me signed in" checkbox', () => {
        // Kunjungi halaman login
        cy.visit('http://zero.webappsecurity.com/login.html');
        
        // Cek apakah checkbox "Keep me signed in" ada dan bisa dicentang
        cy.get('#user_remember_me') // Ganti dengan ID atau selector yang benar jika diperlukan
          .should('exist') // Pastikan checkbox ada di halaman
          .check()        // Centang checkbox
          .should('be.checked'); // Verifikasi bahwa checkbox telah dicentang
      });

});