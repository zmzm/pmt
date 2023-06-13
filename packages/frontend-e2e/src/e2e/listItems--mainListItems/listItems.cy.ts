describe('frontend: mainListItems component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mainlistitems--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to mainListItems!');
  });
});
