const db = require("../connection");
const DataTypes = require("sequelize");

const Tasks = db.define("Tasks", {
    text: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
});

module.exports = Tasks;