// import models 
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/db_connection');

class Book extends Model {}

Book.init(
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
           
        },
        image_url : {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        sequelize,
        timestamps: false,
        modelName: 'book'
    }
)

module.exports = Book