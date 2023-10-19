const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", function (req, res) {
    res.render("index");
});


app.get("/axios", function (req, res) {
    // console.log(req.query);
    res.send(req.query);
});


app.listen(PORT, function () {
    console.log(`Sever Open: ${PORT}`);
});