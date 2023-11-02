const express = require("express");
const app = express();
const port = 8000;

app.set("view engine", "ejs");
// app.use( "/static", express.static(__dirname + "static" ));
// 위 코드는 CSS 불러오려면 꼭 있어야 하는 코드입니다.
app.use(express.urlencoded({extended: true}));
app.use( express.json() );

const router = require("./routes");
app.use('/', router);

app.get('*', (req,res) =>{
    res.send("접근할 수 없는 주소입니다.");
});

app.listen(port, ()=>{
    console.log( "Server Port : ", port );
});

