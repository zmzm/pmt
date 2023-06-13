describe('frontend: Text component', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=text--primary&args=theme;component;fontSize;color;weight;align;style;className;'
    )
  );

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to Text!');
  });
});
