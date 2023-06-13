describe('frontend: mountWrapperWithTextType component', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=mountwrapperwithtexttype--primary')
  );

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to mountWrapperWithTextType!');
  });
});
