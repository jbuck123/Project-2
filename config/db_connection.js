const { Sequelize } = require('sequelize'); 

//set up the the connection

const connection = new Sequelize(
    'login_db',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql',
        logging: false
    }
);

module.exports = connection;
