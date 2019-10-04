$('#btnSubmit').click(() => {
  const txtUsername = $('#txtUsername').val();
  const txtPassword = $('#txtPassword').val();
  const data = {
    username: txtUsername,
    password: txtPassword,
  };
  console.log(data);
  $.post('/authorize', data, (response) => {
    console.log(response);
  });
});
