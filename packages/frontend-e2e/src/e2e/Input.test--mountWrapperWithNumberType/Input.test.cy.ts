describe('frontend: mountWrapperWithNumberType component', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=mountwrapperwithnumbertype--primary')
  );

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to mountWrapperWithNumberType!');
  });
});
