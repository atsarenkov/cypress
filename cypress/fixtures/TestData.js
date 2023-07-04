const randomNumber = Math.floor(Math.random() * 900) + 100;
// Authentication 
export const email = Cypress.env('EMAIL');
export const password = Cypress.env('PASSWORD');
export const key = Cypress.env('KEY');
export const token = Cypress.env('TOKEN');
// Functional tests data
export const workspaceName = `Workspace - ${randomNumber}`;
export const logoPath = './cypress/fixtures/logo.png';
// API tests data
export const boardName = `Board - ${randomNumber}`;