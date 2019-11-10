const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const users = require('../server/controllers/users');
const database = require('./controllers/genericapp-database');
const register = require('./controllers/registerController');

const app = express();
const port = 8001;
const dir = path.join(__dirname, '/../');
const appDir = path.join(dir, '/app/');

app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());

app.use(express.static(appDir));

database.connect();

// API
app.post('/authorize', users.validateCredentials);
app.post('/register', register.addUser);

// Routes
app.get('/login', (req, res) => {
  res.sendFile(`${appDir}login.html`);
});

app.get('/register', (req, res) => {
  res.sendFile(`${appDir}register.html`);
});

// Always last
app.get('/', (req, res) => {
  res.sendFile(`${appDir}index.html`);
});

app.listen(port, (err) => {
  if (err) {
    console.log('error made');
  }
  console.log(`http://localhost:${port}`);
  console.log(`App running on: ${port}`);
});
