const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
module.exports = new Sequelize('genericapp', 'root', 'gigiWP123', {
    host: 'localhost',
    dialect: 'mysql',
    logging: console.log,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});