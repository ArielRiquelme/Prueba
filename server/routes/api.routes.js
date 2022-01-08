const router = require("express").Router();

router.use("/mascotas", require("./mascotas.routes"));

module.exports = router;
