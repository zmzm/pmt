describe('frontend: PrivateRoute component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=privateroute--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to PrivateRoute!');
  });
});
