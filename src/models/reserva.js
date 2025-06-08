const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const Reserva = sequelize.define("reserva", {
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

module.exports = { Reserva };
