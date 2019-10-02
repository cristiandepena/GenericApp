const express = require('express');
const path = require('path');

const app = express();
const port = 8001;
const dir = path.join(__dirname, '/../');
const appDir = path.join(dir, '/app/');

app.use(express.static(appDir));

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
