describe('frontend: SignUpForm component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=signupform--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to SignUpForm!');
  });
});
