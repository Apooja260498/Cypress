import login from './Locator.cy';

/// <reference types="Cypress" />

describe('monitorOverview', function () {
  it('logintest', function () {
    cy.fixture('URL').then(function (data) {
      cy.visit(data.url);
      var ln = new login();
      ln.setLoginPage(data.username, data.Password);

      cy.get('#toast-container > .ng-trigger')
        .should('have.text', ' login ')
        .click();
      cy.get(data.overviewUrl).should('exist');
      cy.get(data.environmentUrl).should('be.visible');

      cy.get('.card-body').should('contain.text', 'Absolute');
      cy.pause();
      cy.get(':nth-child(1) > :nth-child(2) > .rounded-4 > .card-body').should(
        'contain.text',
        'Intensity'
      );
      cy.get('.child > :nth-child(1) > .rounded-4 > .card-body').should(
        'contain.text',
        'Absolute Emission by Scope tCO2'
      );
      cy.get(
        "c-col[class='col-md-12'] div[class='chart-position'] div:nth-child(1)"
      ).should('have.text', 'Scope 1');
      cy.get(
        "c-col[class='col-md-12'] div[class='chart-position'] div:nth-child(2)"
      ).should('have.text', 'Scope 2');
      cy.get(
        "c-col[class='col-md-12'] div[class='chart-position'] div:nth-child(3)"
      ).should('have.text', 'Scope 3');
      cy.get(
        "svg.highcharts-root g.highcharts-series-group g[stroke='#F8CB00']"
      ).click();
      cy.get(
        "svg.highcharts-root g.highcharts-series-group g[stroke='#736AC9']"
      ).click();

      cy.get('.col-lg-3 > .rounded-4 > .card-body').should('be.visible');
      cy.get('.col-lg-5 > .card.ng-star-inserted > :nth-child(1)').should(
        'contain',
        'Energy Consumed'
      );

      cy.get('.child > :nth-child(2) > .rounded-4 > .card-body').should(
        'be.visible'
      );
      cy.get(
        "c-col[class='col-lg-12 col-md-12 col-sm-12 col-xl-12'] p[class='sec-title']"
      ).should('have.text', ' Top 5 categories tCO2e');
      cy.get(
        "c-col[class='col-lg-12 col-md-12 col-sm-12 col-xl-12'] div[class='chart-position'] div:nth-child(1)"
      ).should('have.text', 'Scope 1');
      cy.get(
        "c-col[class='col-lg-12 col-md-12 col-sm-12 col-xl-12'] div[class='chart-position'] div:nth-child(2)"
      ).should('have.text', 'Scope 2');
      cy.get(
        "c-col[class='col-lg-12 col-md-12 col-sm-12 col-xl-12'] div[class='chart-position'] div:nth-child(3)"
      ).should('have.text', 'Scope 3');
      cy.get('svg.highcharts-root g.highcharts-series-group g rect').should(
        'exist'
      );
      cy.get(
        'div:nth-child(1) > c-row:nth-child(1) > c-col:nth-child(3) > c-card:nth-child(1) > c-card-body:nth-child(1)'
      ).should('exist');
      cy.get('div div.top-title').should(
        'have.text',
        ' Benchmark Only scope 1 and 2tCO2e/km2'
      );
      cy.get('div.mt-4,text-center').should('be.visible');

      if (
        cy.get('.col-lg-5 > div.mb-2 > .mb-2').should('have.text', ' Energy ')
      ) {
        cy
          .get(
            '.card.ng-star-inserted > :nth-child(1) > .row-backgrounds > :nth-child(1) > .cards-background-color > .card-body'
          )
          .should('exist') &&
          cy
            .get(
              '.card.ng-star-inserted > :nth-child(1) > .row-backgrounds > :nth-child(2) > .cards-background-color > .card-body'
            )
            .should('exist');
      }
      if (
        cy
          .get('.col-lg-7 > div.mb-2 > .mb-2')
          .should('have.text', ' Air Emissions ')
      ) {
        cy.get(
          '.col-lg-7 > .card.ng-star-inserted > :nth-child(1) > .g-2 > :nth-child(1) > .cards-background-color > .card-body'
        ).should('contain.text', 'PM');
        cy.get(
          '.col-lg-7 > .card.ng-star-inserted > :nth-child(1) > .g-2 > :nth-child(2) > .cards-background-color > .card-body'
        ).should('contain.text', 'SOx');
        cy.get(
          '.card.ng-star-inserted > :nth-child(1) > .g-2 > :nth-child(3) > .cards-background-color > .card-body'
        ).should('contain.text', 'NOx');
        cy.get(
          '.card.ng-star-inserted > :nth-child(1) > .g-2 > :nth-child(4) > .cards-background-color > .card-body'
        ).should('contain.text', 'O₃');
      }
      if (
        cy
          .get(':nth-child(3) > .col-12 > div.mb-2 > .mb-2')
          .should('have.text', ' Water ')
      ) {
        cy.get(
          ':nth-child(3) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .row-backgrounds > :nth-child(1) > .cards-background-color > .card-body'
        ).should('contain.text', 'Water Withdrawn');
        cy.get(
          ':nth-child(3) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .row-backgrounds > :nth-child(2) > .cards-background-color > .card-body'
        ).should('contain.text', 'Water Consumed');
        cy.get(
          ':nth-child(3) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .row-backgrounds > :nth-child(3) > .cards-background-color > .card-body'
        ).should('contain.text', 'Water Treated');
        cy.get(
          ':nth-child(3) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .row-backgrounds > :nth-child(4) > .cards-background-color > .card-body'
        ).should('contain.text', 'Water Reused');
        cy.get(
          ':nth-child(3) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .row-backgrounds > :nth-child(5) > .cards-background-color > .card-body'
        ).should('contain.text', 'Waste Water Discharged');
      }

      if (
        cy
          .get(':nth-child(4) > .col-12 > div.mb-2 > .mb-2')
          .should('have.text', ' Waste ')
      ) {
        cy.get(
          ':nth-child(4) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .row-backgrounds > :nth-child(1) > .cards-background-color > .card-body'
        ).should('contain.text', 'Scrap Used');
        cy.get(
          ':nth-child(4) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .row-backgrounds > :nth-child(2) > .cards-background-color > .card-body'
        ).should('contain.text', 'Waste Generated');
        cy.get(
          ':nth-child(4) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .row-backgrounds > :nth-child(3) > .cards-background-color > .card-body'
        ).should('contain.text', 'Waste Recycled');
        cy.get(
          ':nth-child(4) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .row-backgrounds > :nth-child(4) > .cards-background-color > .card-body'
        ).should('contain.text', 'Waste Incinerated');
        cy.get(
          ':nth-child(4) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .row-backgrounds > :nth-child(5) > .cards-background-color > .card-body'
        ).should('contain.text', 'Waste Landfilled');
      }

      cy.get(
        ':nth-child(3) > :nth-child(2) > :nth-child(1) > :nth-child(1)'
      ).should('contain', 'Water Consumed');
      cy.get(
        ':nth-child(4) > :nth-child(2) > :nth-child(1) > :nth-child(1)'
      ).should('be.visible');
      cy.get(data.socialUrl).should('exist').click();
      cy.get(':nth-child(1) > .row-backgrounds > .card-body').should(
        'be.visible'
      );
      ln.setCards();

      cy.get(data.governanceUrl).should('be.visible').click();
      ln.setCards();
    });
  });
});
