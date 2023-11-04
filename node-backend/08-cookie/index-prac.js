const express = require("express");
const app = express();
const port = 8000;
const cookieParser = require("cookie-parser")

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use( express.json() );

app.use(cookieParser());

const cookieConfig = {
    httpOnly: true,
    maxAge: 60 * 1000,
}

app.get('/', (req, res) => {
    console.log(req.cookies.popup);
    const noPopup = req.cookies.popup;
    res.render("index-prac", { noPopup });
});

app.post("/cookie", (req, res) => {
    // console.log(req.body.data)
    res.cookie("popup", "no", cookieConfig);
    res.send({ result: true });
});

app.get('*', (req,res) =>{
    res.send("접근할 수 없는 주소입니다.");
});

app.listen(port, ()=>{
    console.log( "Server Port : ", port );
});