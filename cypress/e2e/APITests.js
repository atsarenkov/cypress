import { boardName } from '../fixtures/TestData';

describe('Workspace', { tags: '@api' }, () => {
  let boardId;

  it('Create A Board', () => {
    cy.request({
      method: 'POST', 
      url: '/boards',
      qs: { name: boardName },
      body: {
        prefs_permissionLevel: 'public',
        prefs_background: 'green'
      }
    }).should((response) => {
        expect(response.status).eq(200),
        expect(response.body.prefs.permissionLevel).eq('public'),
        expect(response.body.prefs.background).eq('green'),
        boardId = response.body.id;
    });
  });

  it('Get A Board', () => {
    cy.request({
      method: 'GET', 
      url: `/boards/${boardId}`
    }).should((response) => {
        expect(response.status).eq(200),
        expect(response.body.name).eq(boardName);
    });
  });

  it('Update A Board', () => {
    cy.request({
      method: 'PUT', 
      url: `/boards/${boardId}`,
      qs: { desc: 'Agile Board' }
    }).should((response) => {
        expect(response.status).eq(200),
        expect(response.body.desc).eq('Agile Board');
    });
  });

  it('Delete A Board', () => {
    cy.request({
      method: 'DELETE', 
      url: `/boards/${boardId}`
    }).should((response) => {
        expect(response.status).eq(200);
    });
  });
});