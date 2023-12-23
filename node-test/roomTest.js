// 서버 측 코드 (Node.js)
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('새로운 사용자가 접속했습니다.');

  // 새로운 사용자가 방에 입장했을 때
  socket.on('joinRoom', (roomName) => {
    socket.join(roomName);
    console.log(`사용자가 ${roomName} 방에 입장했습니다.`);
  });

  // 클라이언트로부터 메시지를 받았을 때
  socket.on('sendMessage', (roomName, message) => {
    io.to(roomName).emit('receiveMessage', message);
  });

  // 사용자가 방에서 나갔을 때
  socket.on('leaveRoom', (roomName) => {
    socket.leave(roomName);
    console.log(`사용자가 ${roomName} 방에서 나갔습니다.`);
  });

  // 연결이 종료되었을 때
  socket.on('disconnect', () => {
    console.log('사용자가 연결을 종료했습니다.');
  });
});

server.listen(3000, () => {
  console.log('서버가 3000번 포트에서 실행 중입니다.');
});