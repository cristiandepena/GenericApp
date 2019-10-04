const { con } = require('../controllers/genericapp-database');

function validateCredentials(req, res) {
  let responseMessage;
  const { username, password } = req.body;

  // Validate user input
  if (username == null || username.toString().length <= 0) {
    responseMessage = 'Username not valid, please try again...';
    console.log(responseMessage);
    res.status(500).send(responseMessage);
  } else if (password == null || password.toString().length <= 0) {
    responseMessage = 'Password not valid, please try again...';
    console.log(responseMessage);
    res.status(500).send(responseMessage);
  } else {
    con.query({
      sql: `SELECT username, password from users where username = '${username}' and password = '${password}';`,
    }, (err, rows) => {
      if (err) {
        throw err;
      }
      if (rows.length > 0) {
        // Extract username and password from result
        const { username: user, password: pw } = rows[0];
        if (username === user && password === pw) {
          console.log('User found! Sending user info.');
          res.status(200).send(JSON.stringify({ user }));
        } else {
          console.log('Could not validate user.');
          res.status(500).send();
        }
      } else {
        responseMessage = 'Invalid credentials.';
        console.log(responseMessage);
        res.status(500).send(responseMessage);
      }
    });
  }
}

module.exports = {
  validateCredentials,
};
