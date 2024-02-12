class mapAsset {
  setSites() {
    cy.get(
      'div.horizontal-scroll c-nav.custom-nav-item.nav .nav-item,ng-star-inserted'
    ).should('be.exist');
  }
  setPlant() {
    cy.pause();
    cy.get('div.accodian-content,ng-star-inserted').should('be.visible');
    cy.get('.btn.btns.ng-star-inserted').should('be.enabled').click();
  }
  setProcess() {
    cy.get('.row-list.flex-no-wrap.cust-flex-row.row.ng-star-inserted').should(
      'be.exist'
    );
  }
}
export default mapAsset;
