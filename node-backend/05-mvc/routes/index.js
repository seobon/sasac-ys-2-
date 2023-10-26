const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmain")

// router.get("/", function (req, res) {
//     res,render("index");
// });

// 요청에 대한 정보를 모아둠.

// localhost:8000/
router.get("/", controller.main);

// localhost:8000/comments
router.get("/comments", controller.comments);

// router.post("/test")

module.exports = router;