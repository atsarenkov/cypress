class LoginPage {
  logIn(email, password) {
    cy.session('login', () => {
      cy.visit('/login');
      cy.get('#user').type(email);
      cy.get('#login').click();
      cy.intercept('GET', '**/member/**').as('userLoggedIn');
      cy.origin(
        'https://id.atlassian.com/', 
        { args: [password] }, 
        ([password]) => {
          cy.get('#password').type(password);
          cy.get('#login-submit').click();
        }
      );
      cy.wait('@userLoggedIn');
    },
    { 
      cacheAcrossSpecs: true
    });
  }
}

export default new LoginPage();