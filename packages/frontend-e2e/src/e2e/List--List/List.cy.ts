describe('frontend: List component', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=list--primary&args=theme;children;listName;')
  );

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to List!');
  });
});
