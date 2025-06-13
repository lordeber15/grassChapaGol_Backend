const { Router } = require("express");
const {
  getFutbol,
  createFutbol,
  deleteFutbol,
  updateFutbol,
} = require("../controllers/futbol.controller.js");
const router = Router();

router.get("/futbol", getFutbol);
router.post("/futbol", createFutbol);
router.delete("/futbol/:id", deleteFutbol);
router.put("/futbol/:id", updateFutbol);

module.exports = router;
