const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get("/", function (req, res) {
    res.render("index");
  });

// app.get("/get", function (req, res) {
//     res.send(`${req.query.name}님 환영합니다.`);
// })

app.post("/post", function (req, res) {
    console.log(req.body)
    res.send(`${req.body.name}님 환영합니다.`);
})

app.listen(PORT, function () {
    console.log(`Sever Open: ${PORT}`);
  });