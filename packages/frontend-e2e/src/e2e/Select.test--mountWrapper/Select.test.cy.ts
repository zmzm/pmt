describe('frontend: mountWrapper component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mountwrapper--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to mountWrapper!');
  });
});
