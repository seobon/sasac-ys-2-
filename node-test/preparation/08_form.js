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
})

app.post("/post", function (req, res) {
    // req.body;
    console.log(req.body);
    res.send("post 요청 성공!");
})

app.post("/post/membership", function (req, res) {
    console.log(req.body);
    res.render("result", {
        id : req.body.id,
        name : req.body.name,
        email : req.body.email,
    })
})

app.listen(PORT, function () {
    console.log(`Sever Open: ${PORT}`);
  });