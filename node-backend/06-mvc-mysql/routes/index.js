const express = require("express");
const router = express.Router();
const controller = require("../controller/Cvisitor")

// http://localhost:8000 -> index.ejs를 render하는 코드
router.get("/", controller.home);

// http://localhost:8000/visitors -> visitor.ejs를 render하는 코드
router.get("/visitors", controller.visitor);

// 방명록 등록
router.post("/visitor", controller.postVisitor);

// 방명록 수정
router.patch("/visitor/:id", function (req, res) {
    res.send("");
});

// 방명록 삭제
router.delete("/visitor/:id", controller.deleteVisitor);

module.exports = router;