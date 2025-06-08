const app = require("./src/app");
const sequelize = require("./src/database/database");
const port = process.env.DB_PORT || 3000;

async function main() {
  try {
    await sequelize.sync({ force: false });
    
    app.listen(port, () => {
      console.log("Escuchando en el puerto: ", port);
    });
  } catch (error) {
    console.error("No tienes un error aqui revisa bien: ", error);
  }
}

main();
