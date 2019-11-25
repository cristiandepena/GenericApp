const db = require('./genericapp-database');
const Users = db.import('../models/users.js');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

function validateUsername(username) {
    return new Promise((resolve, reject) => {

        Users.findAll({
                where: {
                    username
                }
            })
            .then(user => {
                if (user.length > 0) {

                    resolve(false);
                } else
                    resolve(true);

            }).catch((err) => {
                console.log(err);
                reject(err);
            })
            // db.query({
            //     sql: `SELECT USERNAME FROM USERS WHERE USERNAME = '${username}';`,
            // }, (err, rows) => {
            //     if (err) {
            //         console.log(err);
            //         reject(err);
            //     } else if (rows.length > 0) {
            //         // This user already exists
            //         resolve(false);
            //     }
            //     // User doesn't exists - valid new user
            //     resolve(true);
            // });
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

        Users.create({
                first_name: firstname,
                last_name: lastname,
                username,
                password
            })
            .then(user => {
                responseMessage = 'User successfully created!';
                console.log(responseMessage);
                res.status(200).send(responseMessage);

            })
            .catch((err) => {
                if (err) {
                    res.status(500).send(err.message);
                    throw err;
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