const { con } = require('../controllers/genericapp-database');

function validateCredentials(req, res) {
  const { username, password } = req.body;

  // Validate user input
  if (username == null || username.toString().length <= 0) {
    console.log('Username not valid, please try again...');
  } else if (password == null || password.toString().length <= 0) {
    console.log('Password not valid, please try again...');
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
        console.log('No user found!');
        res.status(500).send();
      }
    });
  }
}

module.exports = {
  validateCredentials,
};
