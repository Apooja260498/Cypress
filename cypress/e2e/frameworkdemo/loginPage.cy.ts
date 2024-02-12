import login from '../frameworkdemo/Locator.cy';
/// <reference types="Cypress" />

describe('centraworld_calcus', function () {
  it('logintest', function () {
    cy.fixture('URL').then(function (data) {
      cy.visit(data.url);

      var ln = new login();
      ln.setPrivacy();
      ln.invalidCred(data.inValidUsername, data.invalidPassword);

      cy.wait(2000);

      ln.setLoginPage(data.username, data.Password);
    });
  });
});
