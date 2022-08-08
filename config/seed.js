const connection = require('./db_connection');
const User = require('../models/user');
const bcrypt = require('bcrypt');

connection.sync({force: true}).then(() => {
    User.bulkCreate([
        {
            username: "sophie",
            email: "sophie@test.com",
            passwords: bcrypt.hashSync("sophiesophie123", 10)
        },
        {
            username: "sophie",
            email: "sophie@test.com",
            passwords: bcrypt.hashSync("sophiesophie123", 10)
        },
        {
            username: "sophie",
            email: "sophie@test.com",
            passwords: bcrypt.hashSync("sophiesophie123", 10)
        }
    ]).then((users) => {
        console.log('users have been seeded succesfully.')
        process.exit()
    });
});