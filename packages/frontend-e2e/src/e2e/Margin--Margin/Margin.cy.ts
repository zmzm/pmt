describe('frontend: Margin component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=margin--primary&args=margin;'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to Margin!');
  });
});
