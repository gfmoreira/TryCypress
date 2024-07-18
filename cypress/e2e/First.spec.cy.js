import Login from '../support/Login';

describe('Login Test', () => {
  it('Should log in with valid credentials', () => {
    Login.successLogin();
  });

  it('Should show an error message with invalid credentials', () => {
    //TODO Login.failLogin()
  });

  it('Should show validation messages when fields are empty', () => {
    //TODO Login.emptyFields()
  });
});
