describe('frontend: result component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=result--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to result!');
  });
});
