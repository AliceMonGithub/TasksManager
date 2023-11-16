const db = require("../connection");
const DataTypes = require("sequelize");

const User = db.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
});

module.exports = User;