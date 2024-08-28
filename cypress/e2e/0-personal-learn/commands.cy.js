/// <reference types="cypress" />

describe('Sauce Demo Checkout', () => {
    it('should complete a purchase successfully', () => {
      cy.completePurchase('standard_user', 'secret_sauce', 'Irpan', 'Yahyal', '12345');
      cy.contains('Thank you for your order!');
    });
  });
  