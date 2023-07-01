class BuildWorkspaceModal {
  enterWorkspaceName(name) {
    cy.xpath('//*[text()="Workspace name"]/following-sibling::input').type(name);
  }

  selectWorkspaceType(type) {
    cy.xpath('//*[text()="Workspace type"]/following-sibling::div').click();
    cy.findAllByTestId(/team-type-input/).contains(type).click();
  }

  enterWorkspaceDescription(description) {
    cy.get('[id*=description]').type(description);
  }

  clickContinue() {
    cy.findByText('Continue').click();
  }

  inviteMember(email) {
    cy.findByTestId('add-members-input').type(email);
    cy.findByText('Invite to Workspace').click();
  }
}

export default new BuildWorkspaceModal();