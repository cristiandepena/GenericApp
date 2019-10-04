$('#btnSubmit').click(() => {
  const txtUsername = $('#txtUsername').val();
  const txtPassword = $('#txtPassword').val();
  const data = {
    username: txtUsername,
    password: txtPassword,
  };

  $.post('/authorize', data)
    .done((response) => {
      console.log('Received response status: 200.');
      if (response) {
        window.location.href = '/';
      } else {
        console.log(response);
        alert('Invalid object received from server!');
      }
    })
    .fail((response) => {
      console.log('Received response status: 500.', response.responseText);
      alert(`Login failed! ${response.responseText}`);
    });
});
