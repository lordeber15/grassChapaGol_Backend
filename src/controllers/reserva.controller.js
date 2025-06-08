const { Reserva } = require("../models/reserva");

const getReserva = async (req, res) => {
  try {
    const getReserva = await Reserva.findAll();
    res.json(getReserva);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createReserva = async (req, res) => {
  try {
    const { title, start, end, backgroundColor, borderColor,textColor } = req.body;
    const newReserva = await Reserva.create({
      title, start, end, backgroundColor, borderColor,textColor

    });
    res.json(newReserva);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const deleteReserva = async (req, res) => {
  try {
    const { id } = req.params;

    const reserva = await Reserva.findByPk(id);

    if (!reserva) {
      return res.status(404).json({ message: "Reserva no encontrado" });
    }

    await reserva.destroy();

    res.json({ message: "Reserva eliminado correctamente" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const updateReserva = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, start, end, backgroundColor, borderColor,textColor} = req.body;

    const reserva = await Reserva.findByPk(id);

    if (!reserva) {
      return res.status(404).json({ message: "Reserva no encontrado" });
    }

    reserva.title = title;
    reserva.start = start;
    reserva.end = end;
    reserva.backgroundColor = backgroundColor;
    reserva.borderColor = borderColor;
    reserva.textColor = textColor;


    await reserva.save();

    res.json(reserva);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getReserva, createReserva, deleteReserva, updateReserva };
