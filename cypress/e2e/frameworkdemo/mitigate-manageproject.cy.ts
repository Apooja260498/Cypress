import login from './Locator.cy';
/// <reference types="Cypress" />

describe('monitorBaseline', function () {
  it('logintest', function () {
    cy.fixture('URL').then(function (data) {
      cy.visit(data.url);
      var ln = new login();
      ln.setLoginPage(data.username, data.Password);
      cy.get(data.mitigateUrl).click();
      cy.get(
        '.header-tabs > .nav > .nav-item a.ms-3,nav-link,ng-star-inserted'
      ).should('contain.text', 'SBT CalculatorSet TargetManage Projects');
      if (
        cy.get(data.setTargetUrl).should('contain.text', 'Set Target').click()
      ) {
        if (
          cy
            .get(':nth-child(1) > .acc-item > .accordion-header > .btn')
            .should('be.visible')
        ) {
          cy.get(
            '#accordion-item-0 > .accordion-body > .accordion-body-card'
          ).should('be.exist');
        }
        if (
          cy
            .get(':nth-child(2) > .acc-item > .accordion-header > .btn')
            .should('be.visible')
            .click()
        ) {
          cy.get(
            '#accordion-item-1 > .accordion-body > .accordion-body-card'
          ).should('be.exist');
        }
        if (
          cy
            .get(
              ':nth-child(3) > .acc-item > .accordion-header > .header-inner > .btn'
            )
            .should('be.visible')
            .click()
        ) {
          cy.get(
            ':nth-child(3) > .acc-item > .accordion-header > .header-inner > .filter-area > .select-no-theme'
          ).should('be.visible');
          cy.get(
            '#accordion-item-2 > .accordion-body > .accordion-body-card'
          ).should('be.exist');
        }
      }
      if (
        cy
          .get(
            ':nth-child(4) > .acc-item > .accordion-header > .header-inner > .btn'
          )
          .should('be.exist')
          .click()
      ) {
        cy.get(
          ':nth-child(4) > .acc-item > .accordion-header > .header-inner > .filter-area > :nth-child(1)'
        ).should('be.visible');
        cy.get('.filter-area > :nth-child(2)').should('be.visible');
        cy.get(
          '#accordion-item-3 > .accordion-body > .accordion-body-card'
        ).should('be.exist');
      }
      if (cy.get(data.manageProjectUrl).click()) {
        cy.get('.left').should('contain', 'entries');
        if (cy.get('.filter-page-item > .form-select').select('20'))
          cy.get('tbody > :nth-child(n) > :nth-child(1)').should('be.exist');
        cy.get('.pagination-previous > .ng-star-inserted').should('be.visible');
        cy.get('.pagination-next > .ng-star-inserted').should('be.visible');
        if (cy.get('.add-and-filters > .btn').should('be.visible').click()) {
          cy.get("div[class='box-flax'] h5[class='card-title']").should(
            'have.text',
            'Project Overview'
          );
          if (
            cy.get('#ProjectName').should('be.exist').type('Onsite').clear()
          ) {
            cy.get('.col-md-4 > .mb-3 > .invalid-feedback').should(
              'contain.text',
              ' this field is required '
            );
            cy.get('#ProjectName').type('Green hydrogen');
          }
          cy.get('#decarbProgram').should('be.visible').select('hydrogen');
          cy.get('#siteName').should('be.visible').select('South 82');
          cy.get('#projectDescription').should('be.visible');
          cy.get('.card-body > :nth-child(3)').should(
            'have.text',
            ' Impact Estimation '
          );
          cy.get('#abatementPotential').should('be.exist').type('10000');
          cy.get('#reductionPotential').should('be.exist').type('0.014');
          cy.get(
            ':nth-child(3) > .mb-3 > .custom > .ng-select-container > .ng-value-container > .ng-input > input'
          ).click();

          cy.get('.ng-dropdown-panel-items').should('be.visible');
          cy.get(
            ':nth-child(4) > .mb-3 > .custom > .ng-select-container > .ng-value-container > .ng-input > input'
          ).click();

          cy.get('.ng-option').should('be.visible');

          cy.get('.card-body > :nth-child(5)').should(
            'have.text',
            ' Implementation Ramp Up '
          );
          cy.get('.card-body > :nth-child(7)').should(
            'contain.text',
            ' Finance '
          );
          cy.get('#abatementCost').should('be.visible').type('80');
          cy.get('#copex').should('be.exist');
          cy.get('#opex').should('exist');
          cy.get('#savings').should('be.visible');
          cy.get('.card-body > :nth-child(9)').should(
            'contain.text',
            ' Resourcing '
          );
          cy.get('#projectOwner').should('be.visible').type('John Doe');
          cy.get('#projectDepartment').should('be.visible');
          cy.get('#projectApprover').should('be.exist').type('Ahmed');
          cy.get('#projectStatus')
            .should(
              'contain.text',
              'Select not started  on track  delayed  at risk '
            )
            .select('not started');
          cy.get('#projectState')
            .should('be.visible')
            .select('l4: implemented');
          cy.get('.col > :nth-child(1) > .btn').should('be.enabled');
          cy.get('form.ng-dirty > .action-area > .btn-success')
            .should('be.enabled')
            .click();
        }
        cy.go('back');
        if (
          cy
            .get('.custom-select.font-14.form-select')
            .should('be.visible')
            .select('hydrogen')
        ) {
          cy.get('tbody > :nth-child(n) > :nth-child(4)').should(
            'contain.text',
            'hydrogen'
          );
          if (cy.get('tbody > :nth-child(1) > :nth-child(1)').click()) {
            cy.get('.box-flax > .ng-star-inserted').should(
              'contain',
              ' Project ID '
            );
          }
        }
      }
    });
  });
});
