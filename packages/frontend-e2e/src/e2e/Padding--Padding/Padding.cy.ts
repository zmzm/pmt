describe('frontend: Padding component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=padding--primary&args=padding;'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to Padding!');
  });
});
