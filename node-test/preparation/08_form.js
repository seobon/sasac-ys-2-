const express = require("express");
const app = express();
const PORT = 8000;


app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
    res.render("08_form");
  });

app.get("/get", function (req, res) {
    // req.query;
    console.log(req.query);
    res.send("get 요청 성공!");
    // 응답으로 문자열을 보낸다.
})

// app.get("/hwgi", function (req, res) {
//     console.log(req.query.id);
//     req.query;
//     res.send("회원가입 성공!");
// })

// // 정보가 숨겨짐.(URL 에 노출 되지 않음.) 데이터를 새로 생성하는 요청에 주로 사용 (CRUD 중에서 Create를 의미하는 요청에 사용)
app.post("/post", function (req, res) {
    // req.body;
    console.log(req.body);
    res.send("post 요청 성공!");
})
// // curd는 각각 맞는 메소드를 쓰자는 규칙이 생겼지만, 여전히 post는 여기 저기 사용될 수 있기 때문에 모르겠다 싶으면 post!

// app.post("/post/ver2", function (req, res) {
//     console.log(req.body);
//     res.render("result", {
//         id : req.body.id,
//         name : req.body.name,
//         email : req.body.email,
//     })
// })

// cf)
// 데이터 조회, 데이터 저장(DB 에 데이터 삽입), 원래 있던 데이터를 변경, 데이터 삭제. 등등 의도가 있다.
// CRUD (create, read, update, dellete) // CRUD 는 소프트웨어 프로그램에 필수적인 기능이고, 모두가 가지고 있다.
// get은 주로 조회, post 는 주로 어떤 정보를 보낼때, 생성할때 사용

app.listen(PORT, function () {
    console.log(`Sever Open: ${PORT}`);
  });