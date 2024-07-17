const el = require('./elements').ELEMENTS;
const { username, password, url } = require('../../fixtures/login.json');

class Login {
  acessarLogin() {
    cy.visit(url);
  }

  preencherLogin() {
    cy.visit(url);
    cy.get(el.username).type(username);
    cy.get(el.password).type(password);

    // //Expect 302
    // cy.intercept('POST', '**/auth/validate').as('tryLogin');
    // cy.get('.oxd-button').click();
    // cy.wait('@tryLogin').its('response.statusCode').should('eq', 302);
  }
}

export default new Login();

// class Login {
//   acessarLogin(url, username, password, inputUsername) {
//     if (url) cy.visit(cy.visit(url ? url : urlDefault));

//     cy.get(`input[name=${inputUsername}]`).type(username);
//     cy.get('input[name="password"]').type(password);
//   }
// }

// export default new Login();

// acessarLogin(null, 'eddy', 'asd', 'username');
// acessarLogin('https://guidecidades.com.br/login', 'gfmoreira', '123', 'user');

/*

ctrl + k + c
ctrl + k + u

*/
