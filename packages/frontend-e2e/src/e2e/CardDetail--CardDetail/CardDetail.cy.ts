describe('frontend: CardDetail component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=carddetail--primary&args=card;'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to CardDetail!');
  });
});
