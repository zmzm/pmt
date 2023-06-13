describe('frontend: Select component', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=select--primary&args=variant;label;className;value;placeholder;disabled:false;autoFocus:false;options;theme;onChange;'
    )
  );

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to Select!');
  });
});
