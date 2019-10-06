import { login } from './services/userservice.js';

$('#btnSubmit').click(() => {
  const credentials = {
    username: $('#txtUsername').val(),
    password: $('#txtPassword').val(),
  };

  login(credentials);
});
