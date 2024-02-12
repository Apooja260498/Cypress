describe('scehma validation', () => {
  it('should fetch and display correct graph data', () => {
    cy.request(
      'GET',
      'https://devapp.sentra.world/#/calculus/monitor/net-zero-motivation/pathways/0'
    )
      .its('status')
      .should('equal', 200);
  });
});
