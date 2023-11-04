const express = require("express");
const app = express();
const port = 8000;
const session = require("express-session")

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use( express.json() );

// 미들웨어로 session을 걸어준다
app.use(session({
    secret: "secret key",
    resave: false, // 모든 요청마다 세션을 다시 저장할 것인가?(브라우저에 직접적인 동작을 하지 않아도 세션을 다시 저장할 것인가)
    saveUninitialized: true, // 클라이언트가 서버에 접속했을 때, 세션의 공간 자체를 초기화 할 것인가?
    
    // 브라우저 활동이 일정 시간동안 없으면 로그 아웃을 하고 싶다 할 때 cookie를 사용 할 수 있다.
    // 알고있는 쿠키 옵션과 비슷하다.
    cookie: {
        httpOnly: true, // document.cookie로는 접속 X
        maxAge: 30000
    },
    // secure: true // https 에서만 동작하도록 함
}));

app.get('/', (req, res) => {
    res.send("hello bey")
});

app.get('/set', (req, res) => {
    console.log("1 : ", req.session);
    // 로그인 성공한 시점에 user에 유저를 식별할 수 있는 고유값(primery key같은)을 넣는다
    // 키 값(user)에 id는 안쓰는 것이 좋다.
    req.session.user = "lily";
    console.log("2 : ", req.session);
    res.send("set session");
});
// 클라이언트별로 세션을 가지고 있기에 req를 쓰는 것 뿐, 저장은 서버에 되는 것이 맞다.

app.get('/get', (req, res) => {
    if (req.session.user) {
        res.render("profile", {})
    } else {
        res.redirect("/login")
    }
    console.log("user : ", req.session.user);
    res.send({user: req.session.user});
});

app.get('*', (req,res) =>{
    res.send("접근할 수 없는 주소입니다.");
});

app.listen(port, ()=>{
    console.log( "Server Port : ", port );
});