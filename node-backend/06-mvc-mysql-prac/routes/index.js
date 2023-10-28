const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmembership")

router.get("/", controller.home);

router.post("/membership", controller.membership);

module.exports = router;