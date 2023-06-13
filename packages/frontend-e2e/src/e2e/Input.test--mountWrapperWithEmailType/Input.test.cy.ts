describe('frontend: mountWrapperWithEmailType component', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=mountwrapperwithemailtype--primary')
  );

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to mountWrapperWithEmailType!');
  });
});
