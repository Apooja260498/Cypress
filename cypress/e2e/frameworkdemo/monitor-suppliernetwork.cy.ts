import login from './Locator.cy';
/// <reference types="Cypress" />

describe('monitorBaseline', function () {
  it('logintest', function () {
    cy.fixture('URL').then(function (data) {
      cy.visit(data.url);
      var ln = new login();
      ln.setLoginPage(data.username, data.Password);

      cy.get(data.measureUrl).should('be.visible').click();
      cy.get(data.importNav).eq(1).should('contain', 'Import').click();
    });
  });
});
