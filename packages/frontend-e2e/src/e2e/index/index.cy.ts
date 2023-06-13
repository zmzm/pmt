describe('frontend: TopNavigation component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=topnavigation--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to TopNavigation!');
  });
});
