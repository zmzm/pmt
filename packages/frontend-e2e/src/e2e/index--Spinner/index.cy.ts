describe('frontend: Spinner component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=spinner--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to Spinner!');
  });
});
