describe('frontend: secondaryListItems component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=secondarylistitems--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to secondaryListItems!');
  });
});
