const { con } = require('./genericapp-database');

function validateUsername(username) {
  let responseMessage;
  let passed = true;

  con.query({
    sql: `SELECT USERNAME FROM USERS WHERE USERNAME = '${username}';`,
  }, (err, rows) => {
    if (err) {
      console.log(err);
    } else if (rows.length > 0) {
      responseMessage = 'Username already exists.';
      console.log(responseMessage);
      passed = false;
    }
  });
  return passed;
}

function addUser(req, res) {
  const {
    firstname,
    lastname,
    username,
    password,
  } = req.body;

  if (validateUsername(username)) {
    con.query({
      sql: `INSERT INTO USERS (first_name, last_name, username, password) VALUES ('${firstname}', '${lastname}', '${username}', '${password}');`,
    }, (err) => {
      if (err) {
        res.status(500).send();
        throw err;
      } else {
        console.log('User successfully created!');
        res.status(200).send();
      }
    });
  } else {
    console.log('Failed');
  }
}


module.exports = {
  validateUsername,
  addUser,
};
