class login {
  setLoginPage(username: any, Password: any) {
    cy.get('input[placeholder="Username"]').type(username);
    cy.get('input[placeholder="Password"]').type(Password, { log: false });
    cy.get('.px-4 > .ng-star-inserted').click();

    cy.get('#toast-container > .ng-trigger').should('have.text', ' login ');
    cy.title().should('contain', 'Sentra.world');
  }

  invalidCred(inValidUsername: any, invalidPassword: any) {
    cy.get('input[placeholder="Username"]').type(inValidUsername);
    cy.get('input[placeholder="Password"]').type(invalidPassword);
    cy.get('.px-4 > .ng-star-inserted').click();
    cy.wait(5000);
    cy.get('#toast-container > .ng-trigger').should(
      'have.text',
      ' Unauthorized '
    );
    cy.get('input[placeholder="Username"]').type(inValidUsername).clear();
    cy.get('input[placeholder="Password"]').type(invalidPassword).clear();
  }
  setPrivacy() {
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
  }
  setCalender() {
    cy.get('.pe-2 > .form-control').click();
  }
  setCards() {
    cy.get('.card-body').each((option) => {
      cy.wrap(option).should('exist');
    });
  }
  setSites() {
    cy.get(
      "app-sub-navigation[class='sub-navigation-inner'] a[class='nav-link']"
    ).each(function ($el, index, $listofElements) {
      cy.wrap($el).click({ force: true });
    });
  }
  setBoundary() {
    cy.get('[href="#/calculus/settings/boundary"]')
      .should('contain.text', 'Boundary')
      .click();
  }
}

export default login;
