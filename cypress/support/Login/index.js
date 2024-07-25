const el = require('./elements').ELEMENTS;
const { username, password, url, invalid } = require('../../fixtures/login.json');

class Login {
  successLogin() {
    // Visit the login page
    cy.visit(url);

    // Fill in the username field
    cy.get(el.username).type(username);

    // Fill in the password field
    cy.get(el.password).type(password);

    // Click the login button
    cy.get('.oxd-button').click();

    //TODO Check if the URL includes '/dashboard' after successful login
    //TODO Optional: Check if a specific element on the dashboard page is present
  }

  failLogin() {
    // Visit the login page
    cy.visit(url);

    // Fill the username field with an invalid username
    cy.get(el.username).type(invalid);

    // Fill the password field with an invalid password
    cy.get(el.password).type(invalid);

    // Click the login button
    cy.get('.oxd-button').click();

    // Check if an error message is displayed
    cy.contains('.oxd-text oxd-text--p oxd-alert-content-text').should('be.visible');
  }

  emptyFields() {
    //TODO Visit the login page
    //TODO Click the login button without filling in the fields
    //TODO Check if validation messages are displayed
  }
}

export default new Login();
