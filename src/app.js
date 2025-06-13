const express = require("express");
const reservaRoutes = require("./routes/reserva.routes");
const futbolRoutes = require("./routes/futbol.routes");
const login = require("./routes/login.routes");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.use(reservaRoutes);
app.use(futbolRoutes);
app.use(login);

module.exports = app;
