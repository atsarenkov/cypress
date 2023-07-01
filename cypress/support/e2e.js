import './commands';
import '@percy/cypress';

require('@cypress/xpath');

const registerCypressGrep = require('@cypress/grep');
registerCypressGrep();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});