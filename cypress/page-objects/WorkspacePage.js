class WorkspacePage {
  uploadLogo(filePath) {
    cy.contains('Change logo').click();
    cy.intercept('POST', '**/logo').as('logoUploaded');
    cy.findByTestId('fileInput').selectFile(filePath, { force: true });
    cy.wait('@logoUploaded');
  }

  get workspaceName() {
    return cy.get('[class$=header-content] h2');
  }

  clickCreateNewBoard() {
    cy.findByTestId('create-board-tile').click();
  }

  collapseSidebar() {
    cy.findByAltText('Workspace navigation collapse icon').click();
  }
}
  
export default new WorkspacePage();