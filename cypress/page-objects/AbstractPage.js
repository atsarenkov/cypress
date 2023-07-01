class AbstractPage {
  get alertBanner() {
    return cy.findByRole('alert');
  }
}
  
export default new AbstractPage();