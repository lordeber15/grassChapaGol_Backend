const Sequelize = require("sequelize");
const { DB_DEPLOY } = process.env;

const sequelize = new Sequelize(
  //"postgres://postgres:123456@localhost:5432/grasreservas",
  DB_DEPLOY,
  {
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // Esto es opcional, dependiendo de la configuración de tu servidor PostgreSQL
      },
    },
  }

  /*"postgres://postgres:123456@localhost:5432/grasreservas"*/
);

module.exports = sequelize;
