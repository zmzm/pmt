describe('frontend: CreateCard component', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=createcard--primary&args=handleSubmit;showForm;')
  );

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to CreateCard!');
  });
});
