import loginPage from '../page-objects/LoginPage';
import header from '../page-objects/Header';
import buildWorkspaceModal from '../page-objects/BuildWorkspaceModal';
import workspacePage from '../page-objects/WorkspacePage';
import sidebar from '../page-objects/Sidebar';
import workspaceSettingsPage from '../page-objects/WorkspaceSettingsPage';
import abstractPage from '../page-objects/AbstractPage';
import createBoardModal from '../page-objects/CreateBoardModal';
import { email, password, workspaceName, logoPath } from '../fixtures/TestData';

describe('Workspace', { tags: '@functional' }, () => {
  beforeEach(() => {
    loginPage.logIn(email, password);
    cy.visit('/');
  });

  it('Create A Workspace', () => {
    header.clickCreateWorkspace();
    buildWorkspaceModal.enterWorkspaceName(workspaceName);
    buildWorkspaceModal.selectWorkspaceType('Engineering-IT');
    buildWorkspaceModal.enterWorkspaceDescription('Just testing');
    buildWorkspaceModal.clickContinue();
    buildWorkspaceModal.inviteMember(email);
    workspacePage.uploadLogo(logoPath);
    workspacePage.workspaceName.should('have.text', workspaceName);
    cy.percySnapshot("WorkspacePage"); // performs visual comparison using Percy  
  });

  it('Add A Board To The Workspace', () => {
    header.openWorkspace(workspaceName);
    workspacePage.clickCreateNewBoard();
    createBoardModal.clickStartWithTemplate();
    createBoardModal.selectBoardTemplate('Simple Project Board');
    createBoardModal.clickCreate();
    cy.percySnapshot("BoardContent");
  });

  it('Delete The Workspace', () => {
    sidebar.expandWorkspaceOptions(workspaceName);
    sidebar.clickSettings();
    workspaceSettingsPage.deleteWorkspace(workspaceName);
    abstractPage.alertBanner.should('have.text', `The Workspace "${workspaceName}" has been deleted.`);
  });
});
