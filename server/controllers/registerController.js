const { con } = require('./genericapp-database');

function validateUsername(username) {
  return new Promise((resolve, reject) => {
    con.query({
      sql: `SELECT USERNAME FROM USERS WHERE USERNAME = '${username}';`,
    }, (err, rows) => {
      if (err) {
        console.log(err);
        reject(err);
      } else if (rows.length > 0) {
        // This user already exists
        resolve(false);
      }
      // User doesn't exists - valid new user
      resolve(true);
    });
  });
}

async function addUser(req, res) {
  let responseMessage = 'Response message not set';

  const {
    firstname,
    lastname,
    username,
    password,
  } = req.body;

  if (await validateUsername(username)) {
    con.query({
      sql: `INSERT INTO USERS (first_name, last_name, username, password) VALUES ('${firstname}', '${lastname}', '${username}', '${password}');`,
    }, (err) => {
      if (err) {
        res.status(500).send(err.message);
        throw err;
      } else {
        responseMessage = 'User successfully created!';
        console.log(responseMessage);
        res.status(200).send(responseMessage);
      }
    });
  } else {
    responseMessage = 'User already exists!';
    console.log(responseMessage);
    res.status(500).send(responseMessage);
  }
}

module.exports = {
  validateUsername,
  addUser,
};
