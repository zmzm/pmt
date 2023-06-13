describe('frontend: mountedCard component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mountedcard--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to mountedCard!');
  });
});
