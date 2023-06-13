describe('frontend: Card component', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=card--primary&args=cardName;labels;commentsCount;className;assignedUsers;onClick;'
    )
  );

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to Card!');
  });
});
