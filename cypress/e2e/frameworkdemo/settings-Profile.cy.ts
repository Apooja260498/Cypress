//import 'cypress-file-upload';
import login from './Locator.cy';
//
/// <reference types="Cypress" />

describe('monitorBaseline', function () {
  it('logintest', function () {
    cy.fixture('URL').then(function (data) {
      cy.visit(data.url);
      var ln = new login();
      ln.setLoginPage(data.username, data.Password);
      cy.get(data.settingUrl).should('contain', 'Settings').click();
      cy.get('app-profile.ng-star-inserted .nav-horizontal-scroll').should(
        'contain.text',
        'Company overview'
      );
      // cy.get('#companyLogo').attachFile({filepath:'Logo.png'});
      if (
        cy.get('#company').clear() &&
        cy.get('#industryCluster').clear() &&
        cy.get('#BusinessLine').clear()
      ) {
        cy.get('.invalid-feedback.ng-star-inserted').should(
          'contain.text',
          'This field is required'
        );
        cy.get("button[type='submit']").should('not.be.enabled');
      }

      if (
        cy.get('#company').type('SteelCo') &&
        cy.get('#industryCluster').type('Metals & Mining') &&
        cy.get('#BusinessLine').type('Furniture')
      ) {
        cy.get("button[type='submit']").should('be.enabled').click();

        cy.get('div#toast-container.toast-top-right.toast-container')
          .should('be.visible')
          .and('contain.text', 'Success!');
      }

      cy.get('.btn-outline-success').should('be.enabled');
    });
  });
});
