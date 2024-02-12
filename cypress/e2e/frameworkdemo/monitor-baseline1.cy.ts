import login from './Locator.cy';
/// <reference types="Cypress" />

describe('monitorBaseline', function () {
  it('logintest', function () {
    cy.fixture('URL').then(function (data) {
      cy.visit(data.url);
      var ln = new login();
      ln.setLoginPage(data.username, data.Password);
      cy.wait(2000);
      cy.get(data.BaselineUrl).should('contain', 'Baseline').click();
      if (
        cy
          .get(data.corporateCarbonUrl)
          .should('contain', 'Corporate carbon footprint')
      ) {
        cy.get('.mb-4 > :nth-child(1) > .rounded-4 > .card-body').should(
          'exist'
        );
        cy.get('.g-4 > :nth-child(1) > .rounded-4 > .card-body').should(
          'exist'
        );
        cy.get(':nth-child(2) > .rounded-4 > .card-body').should('exist');
      }
      if (
        cy
          .get(
            "app-sub-navigation[class='sub-navigation-inner'] a[class='nav-link']"
          )
          .eq(0)
          .click()
      ) {
        if (cy.get('[for="intesity"]').click()) {
          cy.get('#breakdownBenchMarkChart').should('be.visible');
          cy.get('svg.highcharts-root rect.highcharts-point').should(
            'be.visible'
          );
          cy.get('svg g text').should('contain', 'Jan');
          cy.get('div.highcharts-axis span').should(
            'have.text',
            'MonthsIntensity tCO2e/tIntensity'
          );
        }
        if (cy.get('[for="absolute"]').click()) {
          cy.get('#breakdownBenchMarkChart').should('be.visible');
          cy.get('svg.highcharts-root rect.highcharts-point').should(
            'be.visible'
          );
          cy.get('div.highcharts-axis span').should(
            'have.text',
            'MonthsAbsolute By Scope  tCO2eAbsolute By Scope'
          );
        }
        cy.wait(2000);
        cy.url().should('not.include', 'loading');
        cy.get('.g-4 > :nth-child(1) > .rounded-4 > .card-body').should(
          'exist'
        );
        cy.get('svg.highcharts-root g.highcharts-series-group path').invoke(
          'attr',
          'fill'
        );
        cy.get('.chart-side-colors').should('be.visible');
        cy.get(':nth-child(2) > .rounded-4 > .card-body').should('exist');
      }
      ln.setCalender();
      cy.get(
        ':nth-child(1) > bs-calendar-layout > .bs-datepicker-head > bs-datepicker-navigation-view > .previous > span'
      ).dblclick();
      if (
        cy
          .get(
            ':nth-child(1) > bs-calendar-layout > .bs-datepicker-body > .months > tbody > :nth-child(1) > :nth-child(2) > span'
          )
          .click() &&
        cy
          .get(
            ':nth-child(1) > bs-calendar-layout > .bs-datepicker-body > .months > tbody > :nth-child(1) > :nth-child(3) > span'
          )
          .click()
      ) {
        cy.get('.mb-4 > :nth-child(1) > .rounded-4 > .card-body').should(
          'exist'
        );
      }
      if (cy.get(data.productCarbonUrl).should('be.visible').click()) {
        if (cy.get(':nth-child(1) > .rounded-4 > .card-body').should('exist')) {
          cy.get('.scopes-legend > :nth-child(1)').should('contain', 'Product');
          cy.get('.scopes-legend > :nth-child(2)').should('contain', 'Scope');
          cy.get('.scopes-legend > :nth-child(3)').should('contain', 'Driver');
          cy.get('.products-legend > :nth-child(1)').should(
            'have.text',
            'Billet'
          );
          cy.get('.products-legend > :nth-child(2)').should(
            'have.text',
            'Flat Coil'
          );
          cy.get('.products-legend > :nth-child(3)').should(
            'have.text',
            'Rebar'
          );
          cy.get('.products-legend > :nth-child(4)').should(
            'have.text',
            'Section'
          );
          cy.get('.products-legend > :nth-child(5)').should(
            'have.text',
            'Wire Rod'
          );
          cy.get(
            "c-col .card-body div:nth-of-type(2) div div g.highcharts-series-group g path[class='highcharts-point highcharts-color-0']"
          ).click();
          cy.get(
            "c-col .card-body div:nth-of-type(2) div div g.highcharts-series-group g path[class='highcharts-point highcharts-color-1']:nth-child(2)"
          ).dblclick();
          cy.get(
            "c-col .card-body div:nth-of-type(2) div div g.highcharts-series-group g path[class='highcharts-point highcharts-color-1']:nth-child(3)"
          ).click();
        }
        cy.get(':nth-child(2) > .rounded-4 > .card-body').should('exist');
        if (
          cy
            .get('select')
            .scrollIntoView({ duration: 2000 })
            .should('exist')
            .select('Chilled Water')
        ) {
          cy.get('.product-based-wrapper > .card > .card-body').should(
            'be.visible'
          );
          cy.get(
            "svg.highcharts-root g.highcharts-series-group g path[fill='#F86C6B']"
          ).should('be.exist');
          cy.get(
            'div#productionChart div g.highcharts-axis.highcharts-xaxis'
          ).should('have.text', 't steel produced');
          cy.get(
            'div#productionChart div g.highcharts-axis.highcharts-yaxis'
          ).should('have.text', 'tCO2/t steel');
        }
        if (
          cy
            .get(
              '.sub-navigation-inner > .sub-navigation > .table-tabs > .row > .col > .nav-horizontal-scroll > .nav-horizontal-scroll-inner > :nth-child(2) > .nav-link'
            )
            .should('contain', 'PCF')
            .click()
        ) {
          if (
            cy
              .get(':nth-child(1) > .filter-box > .custom-form-control')
              .select('2')
          ) {
            cy.get(':nth-child(2) > .filter-box > .custom-form-control').should(
              'be.enabled'
            );
          }
        }
      }
    });
  });
});
