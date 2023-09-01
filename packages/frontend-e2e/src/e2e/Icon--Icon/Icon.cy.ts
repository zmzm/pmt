describe('frontend: Icon component', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=icon--primary&args=theme;color;name;className;size;onClick;'
    )
  );

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to Icon!');
  });
});
