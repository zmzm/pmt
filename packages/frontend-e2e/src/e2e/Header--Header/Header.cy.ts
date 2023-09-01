describe('frontend: Header component', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=header--primary&args=variant;className;theme;children;'
    )
  );

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to Header!');
  });
});
