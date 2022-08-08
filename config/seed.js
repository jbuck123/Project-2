const connection = require("./db_connection");
const User = require('../models/user');
const bcrypt = require('bcrypt');

connection.sync({force: true}).then(() => {
    User.bulkCreate([
        {
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


