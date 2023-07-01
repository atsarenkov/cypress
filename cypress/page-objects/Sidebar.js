class Sidebar {
  expandWorkspaceOptions(workspaceName) {
    cy.findAllByTestId('home-team-tab-name').contains(workspaceName).click();
  }

  clickSettings() {
    cy.findByTestId('home-team-settings-tab').click();
  }
}
  
export default new Sidebar();