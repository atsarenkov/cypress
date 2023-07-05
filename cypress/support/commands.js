import '@testing-library/cypress/add-commands';
import { key, token } from '../fixtures/TestData';

Cypress.Commands.overwrite('request', (originalFn, ...args) => {
  const defaults = {
    headers: {
      'Authorization': `OAuth oauth_consumer_key="${key}", oauth_token="${token}"`,
      'Content-Type': 'application/json'
    }
  }
  let options = {}
  if (typeof args[0] === 'object' && args[0] !== null) {
    options = args[0];
  } 
  else if (args.length === 1) {
    [options.url] = args;
  } 
  else if (args.length === 2) {
    [options.method, options.url] = args;
  } 
  else if (args.length === 3) {
    [options.method, options.url, options.body] = args;
  }
  return originalFn({ ...defaults, ...options, ...{ headers: { ...defaults.headers, ...options.headers } } });
});

Cypress.Commands.add('navigateToHomePage', () => {
  cy.visit('/');
})