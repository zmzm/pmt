describe('frontend: Input component', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=input--primary&args=type;name;variant;label;className;width;value;placeholder;disabled:false;autoFocus:false;theme;'
    )
  );

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to Input!');
  });
});
