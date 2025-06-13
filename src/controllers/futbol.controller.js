const { Futbol } = require("../models/futbol");

const getFutbol = async (req, res) => {
  try {
    const getFutbol = await Futbol.findAll();
    res.json(getFutbol);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createFutbol = async (req, res) => {
  try {
    const { title, start, end, backgroundColor, borderColor, textColor } =
      req.body;
    const newFutbol = await Futbol.create({
      title,
      start,
      end,
      backgroundColor,
      borderColor,
      textColor,
    });
    res.json(newFutbol);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const deleteFutbol = async (req, res) => {
  try {
    const { id } = req.params;

    const futbol = await Futbol.findByPk(id);

    if (!futbol) {
      return res.status(404).json({ message: "Futbol no encontrado" });
    }

    await futbol.destroy();

    res.json({ message: "Futbol eliminado correctamente" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const updateFutbol = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, start, end, backgroundColor, borderColor, textColor } =
      req.body;

    const futbol = await Futbol.findByPk(id);

    if (!futbol) {
      return res.status(404).json({ message: "Futbol no encontrado" });
    }

    futbol.title = title;
    futbol.start = start;
    futbol.end = end;
    futbol.backgroundColor = backgroundColor;
    futbol.borderColor = borderColor;
    futbol.textColor = textColor;

    await futbol.save();

    res.json(futbol);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getFutbol, createFutbol, deleteFutbol, updateFutbol };
