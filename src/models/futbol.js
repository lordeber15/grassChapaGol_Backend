const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const Futbol = sequelize.define("futbol", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  start: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  end: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  backgroundColor: DataTypes.STRING,
  borderColor: DataTypes.STRING,
  textColor: DataTypes.STRING,
});

module.exports = { Futbol };
