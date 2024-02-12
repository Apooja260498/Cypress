import login from './Locator.cy';
import mapAsset from './settings-Mapasset.cy';

/// <reference types="Cypress" />

describe('boundary', function () {
  it('logintest', function () {
    cy.fixture('URL').then(function (data) {
      cy.visit(data.url);
      var ln = new login();
      ln.setLoginPage(data.username, data.Password);
      cy.get(data.settingUrl).should('contain', 'Settings').click();

      ln.setBoundary();

      cy.get('#calculation-resulution > p').should(
        'contain.text',
        'Select Feature'
      );

      var asset = new mapAsset();
      if (cy.get("select[formcontrolname='assetLevel']").select('Company')) {
        cy.get("button[type='submit']").click();
        cy.get(data.mapAssetUrl).should('not.be.enabled');
      }
      cy.get(':nth-child(3) > .custom-select').should(
        'contain.text',
        ' Select scope level  Driver  Supplier  Network '
      );
      cy.get(':nth-child(4) > .custom-select').should(
        'contain.text',
        ' Select frequency  Yearly  Quarterly  Monthly  Daily  Heat '
      );
      cy.get('div#calculation-methodology').should('be.visible');
      cy.get('.flex-conatiner > :nth-child(2)').should('be.exist');

      cy.get(data.selectFeature).click();
      if (cy.get("select[formcontrolname='assetLevel']").select('Site')) {
        cy.get("button[type='submit']").click();
        cy.get(data.mapAssetUrl).click();
        asset.setSites();
      }

      cy.get(data.selectFeature).click();
      if (cy.get("select[formcontrolname='assetLevel']").select('Plant')) {
        cy.get("button[type='submit']").click();
        cy.get(data.mapAssetUrl).click();
        asset.setPlant();
      }

      cy.get(data.selectFeature).click();
      if (cy.get("select[formcontrolname='assetLevel']").select('Process')) {
        cy.get("button[type='submit']").click();
        cy.get(data.mapAssetUrl).click();
        asset.setProcess();
      }
      cy.get('.btn-add').should('be.exist').click();
      if (
        cy.get("input[placeholder='enter site name']").type('site11').clear()
      ) {
        cy.get('.invalid-feedback.ng-star-inserted').should(
          'contain.text',
          ' This field is required '
        );
        cy.get('.model-action').should('not.be.enabled');
      }
      if (cy.get("input[placeholder='enter site name']").type('site11')) {
        cy.get('.model-action').should('not.be.disabled').click();
      }
      cy.get(':nth-child(1) > .nav-item-group > .link').click();
      cy.get('.edit-btn > .btn').should('be.visible').click();
      cy.get(data.mapDrivers).click();
      cy.get('.nav-links').should(
        'contain.text',
        ' Scope 1  Scope 2  Scope 3 '
      );
      cy.get('.edit-btn > .btn').should('be.visible').click();
      cy.get(
        ':nth-child(2) > .accodian-section > .accordion > .accordion-card > .card-body > .accordion-item > .accordion-header > .flex-container > .col-md-2 > .accordion-button'
      ).click();
      cy.get(
        '#accordion-item-43 > :nth-child(2) > .accordian-body > .d-flex > .form-input-field > .switch > .slider'
      ).click();
      cy.get(
        '#accordion-item-43 > :nth-child(3) > .accordian-body > .d-flex > .form-input-field > .switch > .slider'
      ).click();
      cy.get('.action-area').should('contain.text', ' Update ').click();
      cy.get('.boundary-action-button-area > .btn').click();
      cy.get(':nth-child(1) > .select-wrapper > .select-to-theme').select(
        'South 82'
      );
      cy.get('.accodian-content.ng-star-inserted').should('be.exist');
      cy.get(
        ':nth-child(1) > .accodian-section > .accordion > .accordion-card > .card-body > .accordion-item > .accordion-header > .flex-container > .col-md-2 > .accordion-button'
      ).click();
      cy.get('#accordion-item-42').should('be.visible');
      cy.get('c-nav-item:nth-child(2) div:nth-child(1) a:nth-child(1)')
        .should('be.visible')
        .click();
      cy.get(':nth-child(2) > .select-wrapper > .select-to-theme').select(
        'All Plant'
      );

      cy.get(data.calculationApproach).should('be.visible').click();
      cy.get(':nth-child(1) > .select-wrapper > .select-to-theme')
        .should('be.visible')
        .select('South 82');
      cy.get(':nth-child(2) > .select-wrapper > .select-to-theme')
        .should('be.visible')
        .select('All Plant');
      cy.get(':nth-child(3) > .select-wrapper > .select-to-theme').should(
        'be.visible'
      );
    });
  });
});
