describe('frontend: CreateList component', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=createlist--primary&args=boardId;')
  );

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to CreateList!');
  });
});
