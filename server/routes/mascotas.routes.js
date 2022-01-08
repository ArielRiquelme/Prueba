const router = require("express").Router();
const controller = require("../controllers/mascotas.controller");

router.post("/new", controller.crearMascotas);
router.get("/:id", controller.obtenerUnaMascota);
router.get("/", controller.obtenerMascotas);
router.put("/update/:id", controller.updateMascota);
router.delete("/delete/:id", controller.eliminarMascota);

module.exports = router;
