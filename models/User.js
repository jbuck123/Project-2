const { DataTypes, Model } = require("sequelize");
const bcrypt = require("bcrypt");
const Book = require('./book');

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: 2,
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    passwords: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: 6,
      },
    },
  },
  {
    sequelize: require("../config/db_connection"),
// This is going to be the table name
    modelName: "user",
// these are built in not custom
    hooks: {
        // built in method that runs before item is saved to the dB
      async beforeCreate(user) {
        const hashed_pass = await bcrypt.hash(user.passwords, 10);

        user.passwords = hashed_pass;
      },
    },
    timestamps: false,
    underscored: true
  }
);
                                                  // hashed pass               
User.prototype.validatePassword = async function (password, stored_password) {
  return await bcrypt.compare(password, stored_password);
};

User.hasMany(Book);
Book.belongsTo(User);

module.exports = User;
