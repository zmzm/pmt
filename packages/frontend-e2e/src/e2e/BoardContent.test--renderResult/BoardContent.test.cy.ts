describe('frontend: renderResult component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=renderresult--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to renderResult!');
  });
});
