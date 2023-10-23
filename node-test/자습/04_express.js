const express = require('express');
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
// app.set("views", "./view");


// // app.use도 보통 설정 내용이 담긴 app.set 다음에 적는다.
// app.use('/static', express.static(__dirname + '/static'));
// // __dirname : ~~~~/01-express/static 에 클라이언트가 /static 이름으로 들어올 수 있다.

// // app.use('/public', express.static(__dirname + '/static'));
// // __dirname : ~~~~/01-express/static 에 클라이언트가 /public 이름으로 들어올 수 있다.


app.get('/', function (req, res) {
    res.send('/로 받은 요청입니다.');
})

// // http://localhost:8000/test
// app.get('/test', function (req, res) {
//     // res.send('<div style="color:red">test</div>');
//     console.log(__dirname);
//     res.sendFile(__dirname + "/index.html");
//     // res.sendFile("./index.html"); // 오류발생. 상대경로를 사용해서 파일을 불러오는 방법은 거의 사용할 수 없다.
//     // __dirname 는 전역변수..?
// })

app.get("/ejs", function (req, res) {
    res.render("04_express");
})

// app.get("/lily", function (req, res) {
//     res.render("lily", {
//         name: "lily",
//         product: ["운동화", "후드집업", "스웨터"] })
// })

app.listen(PORT, function () {
    console.log(`server open ${PORT}`)
})