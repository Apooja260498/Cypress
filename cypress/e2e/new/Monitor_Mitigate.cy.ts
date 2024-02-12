/// <reference types="Cypress" />

describe('centraworld_calcus', function () {
  it('login', function () {
    cy.visit('https://tabreed.sentra.world/');
    const Username = 'vikas.upadhyay@sentra.world';
    const Password = 'SentraWorld@2023';
    cy.get('input[placeholder="Username"]').type('vikas.upadhyay@sentra.world');
    cy.get('input[placeholder="Password"]').type('SentraWorld@2023');
    cy.get('.open-model > p > :nth-child(2)').should('be.visible').click();
    cy.get(':nth-child(64)').scrollIntoView({ duration: 2000 });
    cy.wait(2000);
    cy.get(
      '#scrollableLongContentModal > .modal-dialog > .modal-content > [style="display: contents;"] > .model-header > .btn'
    ).click();
    cy.get('.open-model > p > :nth-child(1)').should('be.visible').click();
    cy.get(
      '#scrollableLongContentModalp > .modal-dialog > .modal-content > [style="display: contents;"] > .model-body > .policy-font > :nth-child(50)'
    ).scrollIntoView({ duration: 2000 });
    cy.wait(2000);
    cy.get(
      '#scrollableLongContentModalp > .modal-dialog > .modal-content > [style="display: contents;"] > .model-header > .btn'
    ).click();
    if (cy.get("a[href='#']").should('be.visible').click()) {
      cy.log('click on contact us');
    }

    cy.get('.px-4 > .ng-star-inserted').click();

    if (
      Username === 'vikas.upadhyay@sentra.world' &&
      Password === 'SentraWorld@2023'
    ) {
      cy.wait(6000);

      cy.get('#toast-container > .ng-trigger').click();
      cy.get('#toast-container > .ng-trigger').then(function (Login) {
        cy.log(Login.text());
      });
    } else {
      cy.wait(4000);
      cy.get('#toast-container > .ng-trigger').then(function (Unauthorized) {
        cy.log(Unauthorized.text());
      });
    }
    cy.get('.sidebar-nav > :nth-child(3) > .nav-link')
      .should('be.visible')
      .click();
  });
});
