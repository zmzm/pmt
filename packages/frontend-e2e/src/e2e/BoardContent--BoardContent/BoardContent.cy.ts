describe('frontend: BoardContent component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=boardcontent--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to BoardContent!');
  });
});
