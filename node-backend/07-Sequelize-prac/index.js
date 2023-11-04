const express = require("express");
const app = express();
const port = 8000;
const session = require("express-session")

app.set("view engine", "ejs");
app.use( "/static", express.static( "static" ) );
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

const router = require("./routes");
app.use('/user', router);

app.get('*', (req,res) =>{
    res.send("접근할 수 없는 주소입니다.");
});

app.listen(port, ()=>{
    console.log( "Server Port : ", port );
});

