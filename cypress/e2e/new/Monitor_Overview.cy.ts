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
    /*if (cy.get("a[href='#']").should('be.visible').click()) {
      cy.log('click on contact us');
    }*/

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

    cy.get('.pe-2 > .form-control').click();
    cy.get(
      ':nth-child(1) > bs-calendar-layout > .bs-datepicker-body > .months > tbody > :nth-child(1) > :nth-child(1)'
    ).click();
    cy.get(
      ':nth-child(1) > bs-calendar-layout > .bs-datepicker-body > .months > tbody > :nth-child(1) > :nth-child(3) > span'
    ).click();
    const logo = '.ms-4 > .ms-3';
    cy.get(logo).should('be.visible');
    cy.wait(6000);
    cy.get('.mb-2.ms-2.sec-title.ng-star-inserted').should('be.visible');
    cy.get("p[class='mb-0 sec-title']").should('be.visible');
    cy.get(':nth-child(1) > :nth-child(1) > .rounded-4 > .card-body').then(
      function (absolute) {
        cy.log(absolute.text());
      }
    );
    cy.get(
      ':nth-child(2) > .rounded-4 > .card-body > .d-flex > .ms-3 > .sec-title'
    ).should('be.visible');
    cy.get(':nth-child(2) > .rounded-4 > .card-body > .d-flex').then(function (
      intensity
    ) {
      cy.log(intensity.text());
    });
    cy.get("c-col[class='col-md-12'] div[class='chart-position']").then(
      function (scopes) {
        cy.log(scopes.text());
      }
    );
    cy.get('.card-body #breakdownByCatChart').click();
    cy.get('.card-body #breakdownByCatChart').trigger('mouseover');
    cy.get(
      ':nth-child(2) > .rounded-4 > .card-body > .row > :nth-child(1) > .sec-title'
    ).should('be.visible');
    cy.get(
      ':nth-child(2) > .rounded-4 > .card-body > .row > :nth-child(1) > .sec-title'
    ).then(function (top_5_catagories) {
      cy.log(top_5_catagories.text());
    });
    cy.get(
      "c-col[class='col-lg-12 col-md-12 col-sm-12 col-xl-12'] div[class='chart-position']"
    ).then(function (tco2e_scopes) {
      cy.log(tco2e_scopes.text());
    });
    cy.get('.nav-horizontal-scroll-inner > :nth-child(2) > .nav-link')
      .should('be.visible')
      .click();
    cy.get(':nth-child(1) > .row-backgrounds > .card-body').then(function (
      CEO_Pay_Ratio
    ) {
      cy.log(CEO_Pay_Ratio.text());
    });
    cy.get(':nth-child(3) > .row-backgrounds > .card-body').then(function (
      Gender_Pay_Ratio
    ) {
      cy.log(Gender_Pay_Ratio.text());
    });
    cy.get(':nth-child(4) > .row-backgrounds > .card-body').then(function (
      Percentage_of_women_employee
    ) {
      cy.log(Percentage_of_women_employee.text());
    });
    cy.get(':nth-child(5) > .row-backgrounds > .card-body').then(function (
      LTIFR_per_million_worked_hours
    ) {
      cy.log(LTIFR_per_million_worked_hours.text());
    });
    cy.get(':nth-child(6) > .row-backgrounds > .card-body').then(function (
      Community_Spending
    ) {
      cy.log(Community_Spending.text());
    });

    cy.get('.nav-horizontal-scroll-inner > :nth-child(3) > .nav-link')
      .should('be.visible')
      .click();
    cy.get(':nth-child(1) > .row-backgrounds > .card-body').then(function (
      board_seats_occupied
    ) {
      cy.log(board_seats_occupied.text());
    });
    cy.get(':nth-child(2) > .row-backgrounds > .card-body').then(function (
      Independant_member
    ) {
      cy.log(Independant_member.text());
    });
  });
});
