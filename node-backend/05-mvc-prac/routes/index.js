const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmain")

// app.get("/", function (req, res) {
//     res.render("index");
// });

// app.get("/axios", function (req, res) {
//     // console.log(req.query);
//     res.send(req.query);
// });

router.get("/", controller.main);

router.get("/membership", controller.membership)

router.post("/login", controller.login);

module.exports = router;