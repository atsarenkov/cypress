class CreateBoardModal {
  clickStartWithTemplate() {
    cy.contains('button', 'Start with a template').click();
  }
  
  selectBoardTemplate(templateName) {
    cy.findAllByRole('menuitem').contains(templateName).click();
  }

  clickCreate() {
    cy.intercept('POST', '**/markAsViewed').as('boardLoaded');
    cy.findByTestId('create-board-submit-button').click();
    cy.wait('@boardLoaded');
  }
}
    
export default new CreateBoardModal();