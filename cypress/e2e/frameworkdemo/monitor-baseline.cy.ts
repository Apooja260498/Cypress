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
      cy.get(
        'app-baseline.ng-star-inserted > :nth-child(1) > .sub-navigation > .table-tabs > .row > .col > .nav-horizontal-scroll > .nav-horizontal-scroll-inner > :nth-child(1) > .nav-link'
      ).should('contain', 'Corporate carbon footprint');

      // ln.setSites();
      cy.get(
        "app-sub-navigation[class='sub-navigation-inner'] a[class='nav-link']"
      )
        .eq(1)
        .click();
      cy.get('.mb-4 > :nth-child(1) > .rounded-4 > .card-body').should('exist');
      cy.get('.g-4 > :nth-child(1) > .rounded-4 > .card-body').should('exist');
      cy.get(':nth-child(2) > .rounded-4 > .card-body').should('exist');
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
        cy.pause();
        if (cy.get('[for="intesity"]').click()) {
          cy.get('#breakdownBenchMarkChart').should('be.visible');
          cy.get('svg.highcharts-root rect.highcharts-point').should(
            'have.attr',
            'fill',
            '#E83E8C'
          );
          cy.get('svg g text').should('contain', 'Feb 2022');
          cy.get('div.highcharts-axis span').should(
            'have.text',
            'Intensity tCO2e/tIntensity'
          );
        }
        if (cy.get('[for="absolute"]').click()) {
          cy.get('#breakdownBenchMarkChart').should('be.visible');
          cy.get('svg.highcharts-root rect.highcharts-point').should(
            'have.attr',
            'fill',
            '#17A2B8'
          );
          cy.get('svg g text').should('contain', 'Feb 2022');
          cy.get('div.highcharts-axis span').should(
            'have.text',
            'Absolute tCO2eAbsolute'
          );
        }

        cy.get('.g-4 > :nth-child(1) > .rounded-4 > .card-body').should(
          'exist'
        );

        cy.get('svg.highcharts-root g.highcharts-series-group path').invoke(
          'attr',
          'fill'
        );
      }
      cy.pause();
      cy.get('.chart-side-colors').should('be.visible');

      cy.get(':nth-child(2) > .rounded-4 > .card-body').should('exist');

      cy.get(
        'app-baseline.ng-star-inserted > :nth-child(1) > .sub-navigation > .table-tabs > .row > .col > .nav-horizontal-scroll > .nav-horizontal-scroll-inner > :nth-child(2) > .nav-link'
      )
        .should('be.visible')
        .click();

      cy.get(':nth-child(1) > .rounded-4 > .card-body').should('exist');
      cy.get('.scopes-legend > :nth-child(1)').should('contain', 'Product');
      cy.get('.scopes-legend > :nth-child(2)').should('contain', 'Scope');
      cy.get('.scopes-legend > :nth-child(3)').should('contain', 'Driver');
      cy.get('.products-legend > :nth-child(1)').should('have.text', 'Billet');
      cy.get('.products-legend > :nth-child(2)').should(
        'have.text',
        'Flat Coil'
      );
      cy.get('.products-legend > :nth-child(3)').should('have.text', 'Rebar');
      cy.get('.products-legend > :nth-child(4)').should('have.text', 'Section');
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

      cy.get(':nth-child(2) > .rounded-4 > .card-body').should('exist');

      cy.pause();
      if (
        cy
          .get('select')
          .scrollIntoView({ duration: 2000 })
          .should('exist')
          .select('Rebar')
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
    });
    cy.get(
      '.sub-navigation-inner > .sub-navigation > .table-tabs > .row > .col > .nav-horizontal-scroll > .nav-horizontal-scroll-inner > :nth-child(2) > .nav-link'
    ).click();
    if (
      cy
        .get(':nth-child(1) > .filter-box > .custom-form-control')
        .select('Customer 1')
    ) {
      cy.get(':nth-child(2) > .filter-box > .custom-form-control').should(
        'be.enabled'
      );
    }
    if (
      cy.get(':nth-child(2) > .filter-box > .custom-form-control').select('1')
    ) {
      cy.get(':nth-child(3) > .filter-box > .custom-form-control')
        .should('be.enabled')
        .select('GHG');
    }
    cy.get('.card-body > :nth-child(1) > [style=""]').should('be.visible');
    cy.get(
      'svg.highcharts-root g.highcharts-series-group g rect.highcharts-point'
    ).should('be.exist');
    cy.get(
      'svg.highcharts-root g g g.highcharts-legend-item.highcharts-column-series,highcharts-color-undefined highcharts-series-0'
    ).should('have.text', 'Scope 1Scope 2Scope 3');
    cy.get('div.sec-title.mb-4').should(
      'have.text',
      ' Emissions intensity tCO2e/t'
    );
    cy.get(
      'app-baseline.ng-star-inserted > :nth-child(1) > .sub-navigation > .table-tabs > .row > .col > .nav-horizontal-scroll > .nav-horizontal-scroll-inner > :nth-child(3) > .nav-link'
    )
      .should('be.visible')
      .click();
    cy.pause();
    cy.get('div div span.sec-title,ng-star-inserted').should(
      'have.text',
      'Supplier contribution'
    );
    cy.get('div div.chart-side-color1 p.ng-star-inserted:nth-child(1)').should(
      'have.text',
      'Category'
    );
    cy.get('div div.chart-side-color1 p.ng-star-inserted:nth-child(2)').should(
      'have.text',
      'Driver'
    );
    cy.get('div div.chart-side-color1 p.ng-star-inserted:nth-child(3)').should(
      'have.text',
      'Supplier'
    );

    cy.get(
      "div div g.highcharts-series-group g path[class='highcharts-point highcharts-color-1']:nth-child(3)"
    ).dblclick();
    cy.get(
      'c-col.col-md-12 c-card .card-body app-table-status div div .w-100 tr th'
    ).should('be.exist');
    cy.get('app-network app-sub-navigation c-nav c-nav-item:nth-child(2)')
      .should('have.text', ' Supplier comparison ')
      .click();
    if (cy.get('.select-no-theme').select('Natural Gas')) {
      cy.get('.rounded-4 > .card-body').should('be.visible');
    }
    cy.get('text.highcharts-axis-title').should(
      'have.text',
      'Size of business ($)Water Consumption, kilolitresWater Discharge, kilolitres'
    );
    cy.get("span[class='highcharts-axis-title']").should(
      'have.text',
      'Emissions Intensity (tCO2e/t)'
    );
    cy.get('.highcharts-legend-item:nth-child(1)').should(
      'contain',
      '4 Star Rating'
    );
    cy.get('.highcharts-legend-item:nth-child(2)').should(
      'contain',
      '3 Star Rating'
    );
    cy.get('.highcharts-legend-item:nth-child(3)').should(
      'contain',
      '2 Star Rating'
    );
    cy.get('.highcharts-legend-item:nth-child(4)').should(
      'contain',
      '1 Star Rating'
    );
    if (cy.get('.highcharts-legend-item:nth-child(1)').click()) {
      cy.get("path[fill='#22ca23']").should('not.be.visible');
    }
    if (cy.get('.highcharts-legend-item:nth-child(2)').click()) {
      cy.get("path[fill='#ffab34']").should('not.be.visible');
    }
    if (cy.get('.highcharts-legend-item:nth-child(3)').click()) {
      cy.get("path[fill='#E5CF26']").should('not.be.visible');
    }
    if (cy.get('.highcharts-legend-item:nth-child(4)').click()) {
      cy.get("path[fill='#F86C6B']").should('not.be.visible');
    }
  });
});
