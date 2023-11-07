const express = require("express");
const path = require("path")
const app = express();
const port = 8000;
const dotenv = require("dotenv");
// cross-env
// 배포 버전인지 개발버전인지에 따라 다를 env 파일을 로드할 수 있게 도와줌

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use( express.json() );

// console.log(process.env);

// dotenv.config();
// index.js와 같은 위치에 있는 .env 파일을 불러와서 환경변수로 사용할 수 있게 한다.
dotenv.config({ path: path.join(__dirname, "./config/envs/.env") });
// dotenv.config({ path: path.join(__dirname, "./config/envs/development.env") });
dotenv.config({ path: path.join(__dirname, `./config/envs/${process.env.NODE_ENV}.env`) });


// console.log("test var: ", process.env.TEST_VAR);
console.log("password: ", process.env.PASSWORD);

app.get('/', (req, res) => {
    res.send("hello bey")
});


app.get('*', (req,res) =>{
    res.send("접근할 수 없는 주소입니다.");
});

app.listen(port, ()=>{
    console.log( "Server Port : ", port );
});