const http = require("http");
const express = require("express");
const app = express();
// 소켓이 http모듈로 생성된 서버에서만 동작
const server = http.createServer(app);
const PORT = 8000;

// cors 이슈 : 다른 서버에서 보내는 요청을 제한함
// 믿을 수 있는 주소를 허용하는 코드가 필요하다.
// 그러기 위해선 설정을 해줘야하는데, 그를 위해 필요한 모듈이 있다.
const cors = require("cors");
app.use(cors());

const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    // http://localhost:3000/ 로 적었다가 오류남
    // 추후 프로젝트에선 모든 get 요청과 post 요청을 받는 설정도 해야한다.
    // methodes: ["GET", "POST"],
    // 어떤 메소드를 허용할 것인지에 대한 것.
  },
});

io.on("connection", (socket) => {
  console.log("socket id", socket.id);
  socket.on("hello", (res) => {
    console.log(res)
    socket.emit("resHello", {msg: "안녕"})
  })
});

server.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});