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

    cy.get('.pe-2 > .form-control').click();
    cy.get('[href="#/calculus/monitor/baseline"]').should('be.visible').click();
    cy.get(
      'app-baseline.ng-star-inserted > :nth-child(1) > .sub-navigation > .table-tabs > .row > .col > .nav-horizontal-scroll'
    ).then(function (sub_tabs) {
      cy.log(sub_tabs.text());
    });

    cy.get('.sub-navigation-inner c-nav-item a.nav-link').then(function (
      sub_navigation
    ) {
      cy.log(sub_navigation.text());
    });
    cy.get('.sub-navigation-inner c-nav-item a.nav-link').each(($element) => {
      // Click each element
      cy.wrap($element).click({ multiple: true });
      cy.get('.col-lg-8 > .sec-title').should('be.visible');
      cy.get(':nth-child(1) > .rounded-4 > .card-body > .sec-title').should(
        'be.visible'
      );
      cy.get(':nth-child(2) > .rounded-4 > .card-body > .sec-title').should(
        'be.visible'
      );
    });

    if (cy.get('[for="absolute"]').should('be.visible').click()) {
      cy.get('.font-12').then(function (absolute_total_emission) {
        cy.log(absolute_total_emission.text());
      });
    }

    if (cy.get('[for="intesity"]').should('be.visible').click()) {
      cy.get('.col-lg-8 > .font-12').then(function (intensity_total_emission) {
        cy.log(intensity_total_emission.text());
      });
    }

    cy.get('.mb-4 > :nth-child(1) > .rounded-4 > .card-body').should(
      'be.visible'
    );
    cy.get('.mb-4 > :nth-child(1) > .rounded-4 > .card-body').should(
      'be.visible'
    );

    cy.get(':nth-child(1) > .rounded-4 > .card-body > .sec-title').then(
      function (emission_breakdown_scope) {
        cy.log(emission_breakdown_scope.text());
      }
    );
    cy.get('.chart-side-colors > :nth-child(1)').should(
      'contains.text',
      'Scope 1'
    );
    cy.get('.chart-side-colors > :nth-child(2)').should(
      'contains.text',
      'Scope 2'
    );
    cy.get('.chart-side-colors > :nth-child(3)').should(
      'contains.text',
      'Scope 3'
    );
    cy.get('.chart-side-colors > :nth-child(4)').should(
      'contains.text',
      'Scope'
    );
    cy.get('.chart-side-colors > :nth-child(5)').should(
      'contains.text',
      'Category'
    );
    cy.get('.chart-side-colors > :nth-child(6)').should(
      'contains.text',
      'Driver'
    );
    cy.get(':nth-child(2) > .rounded-4 > .card-body > .sec-title').then(
      function (Absolute_emission) {
        cy.log(Absolute_emission.text());
      }
    );
    cy.get('.chart-label').then(function (child) {
      cy.log(child.text());
    });
    cy.get('.chart-label > :nth-child(24)').scrollIntoView({ duration: 2000 });
    cy.get(
      'app-baseline.ng-star-inserted > :nth-child(1) > .sub-navigation > .table-tabs > .row > .col > .nav-horizontal-scroll > .nav-horizontal-scroll-inner > :nth-child(2) > .nav-link'
    )
      .should('be.visible')
      .click();

    cy.get('#calculation-method-dropdown').select('WSA');
    cy.get(
      '.sub-navigation-inner > .sub-navigation > .table-tabs > .row > .col > .nav-horizontal-scroll > .nav-horizontal-scroll-inner > :nth-child(2) > .nav-link'
    )
      .should('be.visible')
      .click();
    cy.get('.card-body').should('be.visible');
    cy.get('.nav-horizontal-scroll-inner > :nth-child(3) > .nav-link')
      .should('be.visible')
      .click();
    cy.get(
      '.row > :nth-child(1) > .display-flex > :nth-child(1) > .sec-title'
    ).should('have.text', 'Supplier contribution');
    cy.get('.chart-side-color1 > :nth-child(1)').then(function (catagory) {
      cy.log(catagory.text());
    });

    cy.get('.chart-side-color1 > :nth-child(2)').then(function (driver) {
      cy.log(driver.text());
    });
    cy.get('.chart-side-color1 > :nth-child(3)').then(function (supplier) {
      cy.log(supplier.text());
    });
    cy.get('.card-body > .row > :nth-child(2)').should('be.visible');
    cy.get('.card-body > .display-flex > :nth-child(1)').should(
      'have.text',
      'Supplier comparison(tCO2e)'
    );
    cy.get('.select-no-theme.check.form-select').select('13');
    cy.get("select[class='select-no-theme form-select']").select('351');
    cy.get(
      '.sub-navigation-inner > .sub-navigation > .table-tabs > .row > .col > .nav-horizontal-scroll > .nav-horizontal-scroll-inner > :nth-child(2) > .nav-link'
    )
      .should('be.visible')
      .click();
    cy.get(
      ':nth-child(1) > .rounded-4 > .card-body > .box-flex-wrapper > .ps-0'
    ).select('S3. Waste & water generated from operations');
    cy.get("select[class='select-no-theme font-14 form-select']").select(
      'Natural Gas'
    );
    cy.get('.highcharts-series-0>text')
      .should('be.text', '3 Star Rating')
      .click();
    cy.get('.highcharts-series-1>text')
      .should('be.text', '2 Star Rating')
      .click();
    cy.get('.highcharts-series-2>text')
      .should('be.text', '1 Star Rating')
      .click();
    cy.get(':nth-child(2) > .rounded-4 > .card-body > .sec-title').then(
      function (label) {
        cy.log(label.text());
      }
    );

    cy.get(
      ':nth-child(2) > .rounded-4 > .card-body > .box-flex-wrapper > :nth-child(1)'
    ).each((option) => {
      cy.log(option.text());
    });
    cy.get(
      ':nth-child(2) > .rounded-4 > .card-body > .box-flex-wrapper > :nth-child(1)'
    ).select(' S3. Upstream Transportation and Distribution');

    cy.get(
      ':nth-child(2) > .rounded-4 > .card-body > .box-flex-wrapper > :nth-child(2)'
    ).select('Natural Gas');
    cy.get('.box-flex-wrapper > :nth-child(3)').select('OCCL');
    cy.get(
      '.sub-navigation-inner > .sub-navigation > .table-tabs > .row > .col > .nav-horizontal-scroll > .nav-horizontal-scroll-inner > :nth-child(3) > .nav-link'
    )
      .should('be.visible')
      .click();
  });
});
