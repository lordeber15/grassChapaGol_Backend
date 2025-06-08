const { Router } = require("express");
const {
  getReserva, createReserva, deleteReserva, updateReserva
} = require("../controllers/reserva.controller.js");
const router = Router();

router.get("/reservas", getReserva);
router.post("/reservas", createReserva);
router.delete("/reservas/:id", deleteReserva);
router.put("/reservas/:id", updateReserva);

module.exports = router;
