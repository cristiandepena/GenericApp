import { register } from './services/userservice.js';

$('#btnSubmit').click(() => {
  const user = {
    firstname: $('#txtFirstname').val(),
    lastname: $('#txtLastname').val(),
    username: $('#txtUsername').val(),
    password: $('#txtPassword').val(),
  };

  register(user);
});
