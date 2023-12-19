const http = require("http");
const express = require("express");
const app = express();
// 소켓이 http 모듈로 생성된 서버에서만 동작
const server = http.createServer(app);
const port = 8000;

const io = require("socket.io")(server)
// 아래 listen에서 불러올 서버를 여기에서

// 위 코드는 아래의 코드와 같은 의미이다.
// const Socket = require("socket.io");
// const io = Socket(server)

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use( express.json() );

app.get('/', (req, res) => {
    res.render("client1")
});

io.on("connection", (socket) => {
    // 참고로 connection 오타나면 안된다.
    // 콜백함수의 매개변수에 있는 socket 객체는 접속한 클라이언트의 소켓이다.
    // 이 소켓 객체를 이용해서 해당하는 클라이언트에게 데이터를 전송하는 것이 가능해진다.
    // console.log("socket id", socket.id);
    // // 새로고침 할 때 마다 디스커넥트하고 다시 커넥트되기 때문에 socket.id가 계속 달라진다.

    // // on을 이용해, 클라이언트에서 socket을 이용해서 보내준 데이터를 받을 이벤트를 등록함.
    // socket.on("hello", (res)=>{
    //     // res : socket을 이용해 보내준 데이터
    //     console.log(res);
    //     socket.emit("bye", {msg: "안녕히가세요~"})
    // });
    // // 여러명이 들어오면 여러개의 socket 객체가 생성되기 때문에
    // socket.on("entry", (res)=>{
    //     console.log(res)
    //     // 전체공지. 1대1 대화가 아닌 전체 인원에게 정보를 보내고 싶을 때.
    //     io.emit("notice", {msg: `${socket.id}님이 입장했습니다.`})
    // })


    
    socket.on("msg", (res)=>{
        console.log(res)
        socket.emit("msgRe", {msg: `${res.msg}`})
    });
});


// 이제 app이 아니라 server를 써야한다.
server.listen(port, function () {
    console.log(`Server open : ${port}` );
});