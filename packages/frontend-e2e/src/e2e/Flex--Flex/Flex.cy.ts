describe('frontend: Flex component', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=flex--primary&args=inline:false;direction;alignItems;justifyContent;alignSelf;size;'
    )
  );

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to Flex!');
  });
});
