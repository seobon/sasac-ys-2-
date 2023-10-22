const express = require('express');
// express 모듈 import.
// express의 위치는 node_modules 안에 있다. 그래서 node_modules파일이 없으면 import가 불가능 하다.
const app = express(); // server 객체
const PORT = 8000; // 포트
// 포트는 1 ~ 65536 존재. 1 ~ 1023까지는 정해진 기능이 있음.
// 3000, 8000, 8080, 8010, 3010, 3001 등등 사용하고 싶으면 사용가능하다.
// 3306 : mysql에서 사용하기 때문에 피해서 사용하길 권장함. 


// app 객체의 view engine 설정을 ejs로 변경
app.set("view engine", "ejs");
// app 객체의 view 폴더 설정. 기본값 : ./views
// app.set("views", "./views");
// 기본값이라 작성할 필요 없다. 다른 것으로 바꾸고 싶다면 바꾸면 된다.
// app.set("views", "./view");


// app.use도 보통 설정 내용이 담긴 app.set 다음에 적는다.
app.use('/static', express.static(__dirname + '/static'));
// __dirname : ~~~~/01-express/static 에 클라이언트가 /static 이름으로 들어올 수 있다.

// app.use('/public', express.static(__dirname + '/static'));
// __dirname : ~~~~/01-express/static 에 클라이언트가 /public 이름으로 들어올 수 있다.


// get 메소드 (http 메소드) : 클라이언트가 요청할 수 있는 방법을 정의함.
// get 요청의 대표적인 예시는 주소창에 url을 입력하는 것인데,
// 즉 아래 코드는 localhost:8000/ 를 요청받았을 때 함수를 실행한다는 의미이다.
app.get('/', function (req, res) {
    // 응답 객체 내의 send 메소드를 실행시킴. 'hello express' 문자열을 응답으로 전송하겠다.
    // send 는 문자열을 응답으로 전송하는 메소드.
    res.send('/로 받은 요청입니다.');
})
// http 메소드의 두번째 인자로 넘겨주는 콜백함수의 매개변수 2개
// 첫번째 매개변수 : request 객체 (요청)
// 두번째 매개변수 : response 객체 (응답)


// http://localhost:8000/test
app.get('/test', function (req, res) {
    // res.send('<div style="color:red">test</div>');
    console.log(__dirname);
    res.sendFile(__dirname + "/index.html");
    // res.sendFile("./index.html"); // 오류발생. 상대경로를 사용해서 파일을 불러오는 방법은 거의 사용할 수 없다.
    // __dirname 는 전역변수..?
})

app.get("/ejs", function (req, res) {
    // render 메소드의 기본 dir 위치가 "./views/" 이다. 그래서 파일이름만 해도 
    // res.render("index") // 현위치에 해당하는 index 파일에 접근한다. 확장자, / 안적어도 된다.
    res.render("test/index") // 들어가고 싶은 파일이 있다면 경로를 포함한 파일명을 적는다.
})

app.get("/lily", function (req, res) {
    res.render("lily", {
        name: "lily",
        product: ["운동화", "후드집업", "스웨터"] })
})


// 실제로 다른 사람들이 서버를 이용하게 하려면, 다른 사람들이 이용할 수 있게 서버를 열어야 한다.
// 서버를 연다.
// localhost:8000 // 이 주소로 접속할 수 있는 하나의 서버가 생긴다.
// 127.0.0.1:8000 // 127.0.0.1 는 내 컴퓨터를 의미
app.listen(PORT, function () {
    console.log(`server open ${PORT}`)
})
// 서버가 열리면 다음 함수를 실행한다는 의미.
// node .\indes.js 명령어로 실행 가능하고 그걸 끄기 위해선 컨트롤 C 하면 된다.