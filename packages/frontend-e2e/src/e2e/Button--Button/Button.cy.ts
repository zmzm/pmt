describe('frontend: Button component', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=button--primary&args=theme;component;outline:false;block:false;transparent:false;size;className;icon;color;'
    )
  );

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to Button!');
  });
});
