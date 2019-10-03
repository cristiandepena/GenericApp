const txtUsername = $('#txtUsername').value;
const txtPassword = $('#txtPassword').value;

$('#btnSubmit').click(() => {
  $.ajax({
    url: '/authorize',
    data: {
      username: txtUsername,
      password: txtPassword,
    },
    success: (result) => {
      alert(result);
    },
  });
});
