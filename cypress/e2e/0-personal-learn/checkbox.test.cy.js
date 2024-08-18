describe('Checkbox "Keep me signed in" Test', () => {
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
  