const http = require("http");
const express = require("express");
const app = express();

const server = http.createServer(app);
const port = 8000;

const io = require("socket.io")(server)

io.on("connection", (socket) => {
    console.log("socket id", socket.id)
});

server.listen(port, function () {
    console.log(`Server open : ${port}` );
});