const express = require('express');
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
// app.set("views", "./view");

app.use('/static', express.static(__dirname + '/static'));

// app.use('/public', express.static(__dirname + '/static'));
// __dirname : ~~~~/01-express/static 에 클라이언트가 /public 이름으로 들어올 수 있다.


app.get('/', function (req, res) {
    res.send('/로 받은 요청입니다.');
})

app.get('/test', function (req, res) {
    // res.send('test');
    res.send('<div style="color:red">test</div>');
})

app.get('/html', function (req, res) {
    // res.sendFile("./04_express.html");
    // console.log(__dirname);
    res.sendFile(__dirname + "/04_express.html");
})

app.get("/ejs", function (req, res) {
    res.render("04_express", {
        name: "WJSN MD",
        product: ["응원봉", "시즌그리팅", "키링"] });
})

app.listen(PORT, function () {
    console.log(`server open ${PORT}`)
})