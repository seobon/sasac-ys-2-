const express = require("express");
const app = express();
const port = 8000;
const session = require("express-session")

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use( express.json() );

app.use(session({
    secret: "secret key",
    resave: false,
    saveUninitialized: true,
    
    cookie: {
        httpOnly: true,
        maxAge: 30000
    },
}));

app.get('/', (req, res) => {
    console.log(req.session.user)
    res.render("index-prac", {user: req.session.user})
});

app.get('/set', (req, res) => {
    req.session.user = "서본";
    res.send("set session");
});

app.get('*', (req,res) =>{
    res.send("접근할 수 없는 주소입니다.");
});

app.listen(port, ()=>{
    console.log( "Server Port : ", port );
});