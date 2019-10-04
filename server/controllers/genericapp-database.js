const mysql = require('mysql');

const con = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'gigiWP123',
  port: '3306',
  database: 'genericapp',
});

function connect() {
  con.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
  });
}

module.exports = {
  connect,
  con,
};
