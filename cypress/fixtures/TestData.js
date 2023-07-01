const randomNumber = Math.floor(Math.random() * 900) + 100;
// Authentication 
export const email = Cypress.env('email');
export const password = Cypress.env('password');
export const key = Cypress.env('key');
export const token = Cypress.env('token');
// Functional tests data
export const workspaceName = `Workspace - ${randomNumber}`;
export const logoPath = './cypress/fixtures/logo.png';
// API tests data
export const boardName = `Board - ${randomNumber}`;