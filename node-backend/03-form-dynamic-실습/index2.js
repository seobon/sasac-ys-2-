const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", function (req, res) {
    res.render("index2");
});

app.post("/axios", function (req, res) {
    const id = "seobon1201";
    const pw = "tjqhs1201";

    if (req.body.id == id && req.body.pw == pw) {
        res.send(true)
    } else {
        res.send(false)
    }
});



// app.get("/ajax", function (req, res) {
//     console.log(req.query);
//     res.send(req.query);
// });

// app.post("/ajax", function (req, res) {
//     console.log(req.body);
//     res.send(req.body);
// });


// app.get("/fetch", function (req, res) {
//     console.log(req.query);
//     res.send(req.query);
// });

// app.post("/fetch", function (req, res) {
//     console.log(req.body);
//     res.send(req.body);
// });


app.listen(PORT, function () {
    console.log(`Sever Open: ${PORT}`);
});