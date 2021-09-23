// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';
// Testing Library queries for Cypress
import '@testing-library/cypress/add-commands';
// code coverage for Cypress
import '@cypress/code-coverage/support';

Cypress.on('uncaught:exception', (cachedError: unknown, runnable: unknown, promise: unknown) => {
    // when the exception originated from an unhandled promise
    // rejection, the promise is provided as a third argument
    // you can turn off failing the test in this case
    if (promise) {
    // returning false here prevents Cypress from
    // failing the test
        return false;
    }
});
