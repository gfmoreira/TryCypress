import Login from '../support/Login';

describe('Area de Login', () => {
  it('Acessando a area de login', () => {
    Login.acessarLogin();
  });

  it('Preenchendo o forms', () => {
    Login.preencherLogin();
  });
});
