const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 8001;
const dir = path.join(__dirname, '/../');
const appDir = path.join(dir, '/app/');

app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());

app.use(express.static(appDir));

function validateCredentials(username, password) {
  let passed = false;
  if (username == null || username.toString().length <= 0) {
    console.log('Username not valid, please try again...');
    if (password == null || password.toString().length <= 0) {
      console.log('Password not valid, please try again...');
    }
  } else {
    passed = true;
  }
  return passed;
}

// Routes
app.post('/authorize', (req, res) => {
  const { username, password } = req.body;
  if (validateCredentials(username, password)) {
    res.send(true);
    console.log(`Welcome ${username}! Your password is: ${password}`);
  } else {
    console.log('Failed');
    res.send(false);
  }
});

// Always last
app.get('*', (req, res) => {
  res.sendFile(`${appDir}index.html`);
});

app.listen(port, (err) => {
  if (err) {
    console.log('error made');
  }
  console.log(`${appDir}index.html`);
  console.log(`App running on: ${port}`);
});
