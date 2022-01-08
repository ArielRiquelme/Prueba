const MascotasModel = require("../models/mascotas.model");

const crearMascotas = async (req, res) => {
  try {
    const { nombre, tipo, descripcion, skill1, skill2, skill3 } = req.body;
    const mascotas = await MascotasModel.create({
      nombre: nombre,
      tipo: tipo,
      descripcion: descripcion,
      skill1: skill1,
      skill2: skill2,
      skill3: skill3,
    }).then(() => res.json({ msj: "Mascota guardada con exito" }));
  } catch (err) {
    console.error({ err });
    if (err.errors) {
      console.log(err.errors);
      return res.status(400).json({ msj: "Bad Request", errors: err.errors });
    }
    res.status(500).json({ msj: "Internal server error" });
  }
};

const obtenerMascotas = async (req, res) => {
  try {
    const mascotas = await MascotasModel.find();
    res.json(mascotas);
  } catch (err) {
    res.status(500).json({ msj: "Internal server error" });
  }
};

const updateMascota = async (req, res) => {
  await MascotasModel.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
  })
    .then((updateMascota) => res.json(updateMascota))
    .catch((err) => res - json(err));
};

const eliminarMascota = async (req, res) => {
  await MascotasModel.deleteOne({ _id: req.params.id })
    .then((deletedMascota) => res.json(deletedMascota))
    .catch((err) => res.json(err));
};

const obtenerUnaMascota = async (req, res) => {
  try {
    await MascotasModel.findOne({
      _id: req.params.id,
    }).then((mascota) => res.json(mascota));
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  crearMascotas,
  obtenerMascotas,
  updateMascota,
  eliminarMascota,
  obtenerUnaMascota,
};
