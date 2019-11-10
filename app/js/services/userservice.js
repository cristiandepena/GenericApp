function requestDone(response) {
  console.log('Received response status: 200.');
  if (response) {
    Cookies.set('user', JSON.stringify(response));
    window.location.href = '/';
  } else {
    console.log(response);
    alert('Invalid object received from server!');
  }
}

function requestError(response) {
  console.log('Received response status: 500.', response.responseText);
  alert(`Login failed! ${response.responseText}`);
}

function loginCheck() {
  if (!Cookies.get('user')) {
    window.location.href = '/login';
  }
}

function login(credentials) {
  $.post('/authorize', credentials)
    .done(requestDone)
    .fail(requestError);
}

function register(user) {
  $.post('/register', user)
    .done(requestDone)
    .fail(requestError);
}

export {
  loginCheck,
  login,
  register,
};
