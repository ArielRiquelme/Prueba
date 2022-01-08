const mongoose = require("mongoose");
const { mascotasSchemam, model } = mongoose;

const mascotasSchema = new mongoose.Schema({
    nombre: {
        type: String,
        unique: [true, "El campo nombre debe ser unico"],
        required: [true, "El campo nombre es requerido"],
    },
    tipo: {
        type: String,
        required: [true, "El campo tipo es requerido"],
    },
    descripcion: {
        type: String,
        required: [true, "El campo descripcion es requerido"],
    },
    skill1: String,
	skill2: String,
	skill3: String
});

const MascotasModel = model("mascotas", mascotasSchema);

module.exports = MascotasModel;