const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }))
app.use(express.json())



// [before]
// app.get("/", function (req, res) {
//     res.render("index");
// })

// const router = require("./routes/index");
// index.js 인 경우는 파일 경로만 써도 된다.
const router = require("./routes");
// use는 미들웨어를 사용할 때 사용한다.
app.use("/", router);
// localhost:8000/~~ 뒤에 뭐가 오든 다 router객체 안으로 들어간다. 있는지 검사를 한다
// app.use("/comments", router);
// 만약 이렇게 작성하면 /comment 로 받은 요청은 전부 router 안에서 파일 위치를 찾게된다.
// 미들웨어 거는 부분을 잘 알아두길 바란다.
// router 에서는 router.get("/", 이렇게 줬어도 /comment로 받은 요청은 router로 들어간다.
// 아무튼 router와 컨트롤러는 이렇게 분리한다.

// 미들웨어를 거는 순서도 중요하다. 만약 위 router에도 /user를 처리할 수 있도록 처리해버리면
// 위에서부터 읽기 때문에 userRouter가 아니라 router로 들어간다.
// 헷갈리기 쉬우니까 조심하길 바란다.

// localhost:8000/user/~~~
const userRouter = require("./routes/user");
app.use("/user", userRouter);



// 존재하지 않는 get 요청에 대해서
app.get("*", function (req, res) {
    res.send("페이지를 찾을 수 없습니다.");
});
// 클라이언트가 없는 주소로 들어갈 경우  Cannat GET /~~ 라고 뜨는데
// 그건 클라이언트가 알아볼 수 없기 때문에 알아볼 수 있는 문구를 주기 위해 작성한 코드이다.
// 위치도 중요하다 가장 마지막에 작성한 것도 위에서 다 요청을 확인하고 아무도 요청을 받지 않을 때 응답하기 위해서 이다.
// *은 어떤 요청도 상관 없이 받는 것이다.

app.listen(PORT, function () {
    console.log(`Sever Open: ${PORT}`);
});