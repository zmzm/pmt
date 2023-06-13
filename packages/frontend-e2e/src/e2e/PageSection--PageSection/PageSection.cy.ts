describe('frontend: PageSection component', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=pagesection--primary&args=margin;maxWidth;className;theme;'
    )
  );

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to PageSection!');
  });
});
