const express = require("express");
const router = express.Router();

const otherController = require("../controllers/other");

router.get("/carrito", otherController.carrito);

module.exports = router;