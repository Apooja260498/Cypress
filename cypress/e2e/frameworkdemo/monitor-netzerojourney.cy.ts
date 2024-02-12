import login from './Locator.cy';

/// <reference types="Cypress" />

describe('monitorNetzeroJourney', function () {
  it('logintest', function () {
    cy.fixture('URL').then(function (data) {
      cy.visit(data.url);
      var ln = new login();
      ln.setLoginPage(data.username, data.Password);
      cy.get(data.NetzerojourneyUrl).should('be.exist').click();
      cy.get('div.nav-horizontal-scroll').should('contain', 'Pathways');
      cy.get(
        ' app-emission-pathways-chart > c-card:nth-child(1) > c-card-body:nth-child(1) > div:nth-child(1):nth-child(1)'
      ).should('have.text', 'Emissions pathways(tCO2e/t)');
      cy.get('path.highcharts-tracker-line').should('be.visible');
      cy.get('g.highcharts-legend-item:nth-child(1)').should(
        'have.text',
        'Business as Usual'
      );
      cy.get('g.highcharts-legend-item:nth-child(2)').should(
        'have.text',
        'Projected'
      );
      cy.get('g.highcharts-legend-item:nth-child(3)').should(
        'have.text',
        'Target'
      );
      cy.get(
        'app-decarbonisation-project-chart:nth-child(2) > c-card:nth-child(1) > c-card-body:nth-child(1) > div:nth-child(1)'
      ).should('have.text', 'Decarbonisation projects planned(tCO2e/t)');
      cy.get(
        'app-decarbonisation-project-chart > .rounded-4 > .card-body'
      ).should('be.visible');
      ln.setSites();
      cy.get(
        'app-net-zero-journey.ng-star-inserted > :nth-child(1) > .sub-navigation > .table-tabs > .row > .col > .nav-horizontal-scroll > .nav-horizontal-scroll-inner > :nth-child(2) > .nav-link'
      )
        .should('contain', 'Projects')
        .click();

      cy.get(
        '.sub-navigation-inner > .sub-navigation > .table-tabs > .row > .col > .nav-horizontal-scroll > .nav-horizontal-scroll-inner >'
      ).each(function ($el, index, $listofElements) {
        cy.wrap($el).click({ force: true });
        cy.get(':nth-child(1) > .project-card').should('be.visible');
        cy.get(':nth-child(2) > .project-card').should(
          'contain.text',
          'Total Projects'
        );
        cy.get(':nth-child(3) > .project-card').should(
          'contain.text',
          'On Track'
        );
        cy.get(':nth-child(4) > .project-card').should(
          'contain.text',
          'At Risk'
        );
        cy.get(':nth-child(5) > .project-card').should('exist');
        cy.get(':nth-child(6) > .project-card').should(
          'contain.text',
          'Not Started'
        );
      });
      cy.get('.mb-5').should('contain.text', 'Cost curve$/tCO2e');
    });
  });
});
