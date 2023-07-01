class Header {
  openWorkspace(workspaceName) {
    cy.findByLabelText('Workspaces').click();
    cy.intercept('GET', '**/workspace**').as('workspaceLoaded');
    cy.findByTestId('workspace-list').contains(workspaceName).click();
    cy.wait('@workspaceLoaded');
  }

  clickCreateWorkspace() {
    cy.findByLabelText('Create board or Workspace').click();
    cy.findByTestId('header-create-team-button').click();
  }
}
  
export default new Header();