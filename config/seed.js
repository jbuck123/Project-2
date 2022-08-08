<<<<<<< HEAD
const connection = require('./db_connection');
=======
const connection = require("./db_connection");
>>>>>>> bc0168e5e2f464e1b3075635f894c47d0362d320
const User = require('../models/user');
const bcrypt = require('bcrypt');

connection.sync({force: true}).then(() => {
    User.bulkCreate([
        {
<<<<<<< HEAD
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
=======
            username: "jbuck123",
            email: "test@gmail.com",
            passwords: bcrypt.hashSync("password123", 10)
        },
        {
            username: "jbuck1235",
            email: "test2@gmail.com",
            passwords: bcrypt.hashSync("password123", 10)
        },
        {
            username: "jbuck1234",
            email: "test1@gmail.com",
            passwords: bcrypt.hashSync("password123", 10)
        },
    ]).then((users) =>{
        console.log("users have been seeded correctly")
        process.exit()
    });
});


>>>>>>> bc0168e5e2f464e1b3075635f894c47d0362d320
