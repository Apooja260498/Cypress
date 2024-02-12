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
    cy.get('[href="#/calculus/monitor/net-zero-motivation"]')
      .should('be.visible')
      .click();
    cy.get(
      'app-net-zero-journey.ng-star-inserted > :nth-child(1) > .sub-navigation > .table-tabs > .row > .col > .nav-horizontal-scroll > .nav-horizontal-scroll-inner > :nth-child(1) > .nav-link'
    )
      .should('be.visible')
      .click();
    cy.get(
      '.sub-navigation-inner > .sub-navigation > .table-tabs > .row > .col > .nav-horizontal-scroll > .nav-horizontal-scroll-inner > :nth-child(1) > .nav-link'
    ).then(function (name) {
      cy.log(name.text());
    });
    cy.get('.sub-navigation-inner c-nav-item').then(function (sites) {
      cy.log(sites.text());
    });
    cy.get(
      "app-sub-navigation[class='sub-navigation-inner'] a[class='nav-link']"
    ).each(($element) => {
      cy.wrap($element).click({ multiple: true });
      cy.get('.mb-4 > .card-body > .ng-star-inserted > .sec-title').should(
        'be.visible'
      );
      cy.get(
        ':nth-child(2) > .card-body > .ng-star-inserted > .sec-title'
      ).should('be.visible');
    });

    cy.get('.highcharts-series-0>text').then(function (emission_pathways) {
      cy.log(emission_pathways.text());
    });
    cy.get('.highcharts-series-1>text').then(function (emission_pathways1) {
      cy.log(emission_pathways1.text());
    });
    cy.get('.highcharts-series-2>text').then(function (emission_pathways2) {
      cy.log(emission_pathways2.text());
    });
    cy.get('.mb-4 > .card-body').should('be.visible');
    cy.get(
      ':nth-child(2) > .card-body > .ng-star-inserted > .sec-title'
    ).should('contains.text', 'Decarbonisation projects planned');
    cy.get(
      ':nth-child(2) > .card-body > .ng-star-inserted > .text-cardet-blue'
    ).then(function (decarbonisation) {
      cy.log(decarbonisation.text());
    });
    cy.get(
      'app-net-zero-journey.ng-star-inserted > :nth-child(1) > .sub-navigation > .table-tabs > .row > .col > .nav-horizontal-scroll > .nav-horizontal-scroll-inner > :nth-child(2) > .nav-link'
    )
      .should('be.visible')
      .click();
    if (
      cy
        .get(
          '.sub-navigation-inner > .sub-navigation > .table-tabs > .row > .col > .nav-horizontal-scroll > .nav-horizontal-scroll-inner > :nth-child(1) > .nav-link'
        )
        .should('be.visible')
        .click()
    ) {
      cy.get(':nth-child(1) > .project-card').then(function (TotalPotential) {
        cy.log(TotalPotential.text());
      });
      cy.get(':nth-child(2) > .project-card').then(function (TotalProject) {
        cy.log(TotalProject.text());
      });
      cy.get(':nth-child(3) > .project-card').then(function (OnTrack) {
        cy.log(OnTrack.text());
      });
      cy.get(':nth-child(4) > .project-card').then(function (AtRisk) {
        cy.log(AtRisk.text());
      });
      cy.get(':nth-child(5) > .project-card').then(function (Delayed) {
        cy.log(Delayed.text());
      });
      cy.get(':nth-child(6) > .project-card').then(function (Notstarted) {
        cy.log(Notstarted.text());
      });
      cy.get('.card-body > .sec-title').should('be.visible');
    }

    cy.get(
      "app-sub-navigation[class='sub-navigation-inner'] a[class='nav-link']"
    ).each(function ($el, index, $listofElements) {
      cy.wrap($el).click({ force: true });
      cy.get(':nth-child(1) > .project-card').then(function (total_potential) {
        cy.log(total_potential.text());
      });
      cy.get(':nth-child(2) > .project-card').then(function (total_project) {
        cy.log(total_project.text());
      });
      cy.get(':nth-child(3) > .project-card').then(function (on_track) {
        cy.log(on_track.text());
      });
      cy.get(':nth-child(4) > .project-card').then(function (At_risk) {
        cy.log(At_risk.text());
      });
      cy.get(':nth-child(5) > .project-card').then(function (delayed) {
        cy.log(delayed.text());
      });
      cy.get(':nth-child(6) > .project-card').then(function (Not_started) {
        cy.log(Not_started.text());
      });
      cy.get('.card-body > .sec-title').should('be.visible');
    });
  });
});
