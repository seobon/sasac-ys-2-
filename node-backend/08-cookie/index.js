const express = require("express");
const app = express();
const port = 8000;
const cookieParser = require("cookie-parser")

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use( express.json() );

app.use(cookieParser()); // 쿠키를 해석할 수 있게 해줌

    // 쿠키의 설정을 한다.
    // key 값은 다 정해져 있는 것이니 임의로 바꾸면 안된다. 오타도 안된다
const cookieConfig = {
    httpOnly: true, // document.cookie 로 접근 불가. 서버에서만 쿠키에 접근할 수 있다.
    // 그렇다고 저장이 서버에 되는 것은 아니고 브라우저에 저장되는데 브라우저에선 접근할 수 없게 만드는 설정.
    
    // 가장 기본적으로 설정 해야 하는 만료일자 설정.
    maxAge: 30000, // 밀리세컨드(ms) 단위로 보존하고자 하는 기간을 설정
    // maxAge: 24 * 60 * 60 * 1000, // 계산식도 작성 가능
    // expires: "2023-11-04T18:00" // 언제까지 만료한다는 설정 정해진 양식이 있음

    // path: "/" // 해당하는 주소 하위에 쿠키를 설정한다는 의미. "/test" -> http://localhost:8000/ 에는 쿠키가 없다.
    // secure: true, // https 보안 서버에서만 쿠키를 동작하게 한다.
    // signed: true // 쿠키 암호화 -> 조회는 req.signedCookies
}
// 이 설정은 그냥 변수라서 어디에 작성해도 상관없고,
// 요청마다 다른 쿠키 설정을 하고 싶다면 응답함수 내에 작성해도 무방하다.

app.get('/', (req, res) => {
    res.render("index");
});

app.get("/set", (req, res) => {
    // 서버가 쿠키를 만들어서 응답으로 보낸다.
    // 보내는 인자는 총 세 개
    // key: key, value: value1, cookieConfig에는 내가 설정한 쿠키에 관한 정보가 들어있다.
    // res.cookie("key1", "value1", cookieConfig);
    // res.cookie("popup", "1", cookieConfig);
    res.send("set cookie");
});

app.get("/get", (req, res) => {
    console.log("cookie: ", req.cookies);
    res.send(req.cookies)
});

app.post("/cookie", (req, res) => {
    const cookieConfig = {
        maxAge: 24 * 60 * 60 * 1000,
    };
    res.cookie("popup", "yes", cookieConfig);
    // cookie는 응답을 보내는 함수가 아님 쿠키를 담는 함수이기 때문에 응답은 꼭 보내주기를

    let data = req.query.data
    console.log(data)
    if (data) {
        res.send(data);
    } else {
        res.send(data);
        console.log(data)

    }
});

app.get('*', (req,res) =>{
    res.send("접근할 수 없는 주소입니다.");
});

app.listen(port, ()=>{
    console.log( "Server Port : ", port );
});