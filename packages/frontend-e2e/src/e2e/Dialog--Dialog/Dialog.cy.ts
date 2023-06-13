describe('frontend: Dialog component', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=dialog--primary&args=visible:false;children;title;fullScreen:false;onClose;'
    )
  );

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to Dialog!');
  });
});
