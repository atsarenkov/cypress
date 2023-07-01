class WorkspaceSettingsPage {
  deleteWorkspace(workspaceName) {
    cy.contains('button', 'Delete this Workspace?').click();
    cy.get('#confirmWorkspaceName').type(workspaceName);
    cy.contains('button', 'Delete Workspace').click();
  }
}
    
export default new WorkspaceSettingsPage();