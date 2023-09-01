describe('frontend: mountWrapperWithPasswordType component', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=mountwrapperwithpasswordtype--primary')
  );

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to mountWrapperWithPasswordType!');
  });
});
