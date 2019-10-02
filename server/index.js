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

// Routes
app.post('/authorize', (req, res) => {
  const { username, password } = req.body;
  console.log(username);
  res.send(`Hello ${username}! Your password is: ${password}.`);
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
