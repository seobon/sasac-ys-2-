const express = require("express");
const multer = require("multer"); // multer 불러오기
const path = require("path");
// path: 파일 경로를 받았을 때, 그 조작을 도와준다.
// ex) 확장자 추출, 파일명 추출.

console.log("hi.txt의 확장자: ", path.extname("hi.txt"));
console.log("hi.txt의 이름: ", path.basename("hi.txt", path.extname("hi.txt")));

const app = express();
const PORT = 8000;

// 클라이언트가 uploads 폴더에 저장한 이미지 파일에 접근할 수 있도록, 미들웨어를 사용한다.
app.use("/uploads", express.static(__dirname + "/uploads"));


// upload라는 객체 안에는 미들웨어 함수가 존재. single(), array()
// 미들웨어 : 요청과 응답 사이에 존재. (next())
// 클라이언트의 요청에 대해서 응답하기 전에 무언가 처리가 필요하다면 미들웨어를 등록할 수 있다.
// (디테일한 설정을 해주지 않으면)multer가 임의의 문자열을 생성해서 그 문자열을 파일 이름으로 만듦.
// 심지어 확장자도 붙여주지 않음
const upload = multer({
    dest: "uploads/",
    // 데스티네이션, 목적지의 약자. 어디에 저장할 것이냐
});

const uploadDetail = multer({
    // disk에 저장소를 만든다고 할 때
    storage: multer.diskStorage({
        destination : function(req, file, done) {
            done(null, "uploads/")
        },
        
        filename: function (req, file, done) {
            console.log(file) // 파일 정보가 우주소녀_은서.webp 일 때
            const ext = path.extname(file.originalname) // .webp
            const basename = path.basename(file.originalname, ext) // 우주소녀_은서
            // 우주소녀_은서_4556158165.webp
            const fileName = basename + "_" + Date.now() + ext;

            done(null, fileName)
        }
    }),
    limits: { fieldSize: 5 * 1024 * 1024 },  // 5MB 제한
})
// 복잡한 구조를 다 이해하려고 하지는 말고, 이런 구조를 알아두기만 해라.

// storage : 파일을 저장할 정보
    // diskStorage : 파일을 디스크에 저장하기 위한 기능을 제공하는 메소드
        // destination : 파일이 저장될 경로
        // filename : 파일이 저장될 이름
// limits
    // fileSize : 파일의 최대 크기

app.set("view engine", "ejs");
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", function (req, res) {
    res.render("index");
});

// 말그대로 요청과 응답 사이에 작성. 요청은 /upload. 응답은 function.
// single(), array(), fields() : 미들웨어 => 클라이언트가 보낸 요청 중에 userfile 이라는 name의 파일 데이터가 있다면,
// 파일을 multer 양식에 맞게 저장해서 req.flie or req.flies 라는 객체를 생성해서 다음 함수에 넘겨줌
// single() : 파일 하나만 업로드 할 때 사용함.
app.post("/upload", upload.single("userfile"), function (req, res) {
    // 인자로 들어오는 이름은 클라이언트 부분에서 보내준 file 이름을 그대로 써야한다
    console.log("file: ", req.file);
    console.log("body: ", req.body);

    res.render("result", {
        src: req.file.path,
        title: req.body.title,
    });
});


app.post("/upload/detail", uploadDetail.single("userfile"), function (req, res) {
    console.log("file detail: ", req.file);
    console.log("body detail: ", req.body);

    res.render("result", {
        src: req.file.path,
        title: req.body.title,
    });
});


// array(): 파일 여러 개 업로드 (name(input) 하나로 여러 개의 파일을 받는 방법)
// req.files 생성
app.post("/upload/array", uploadDetail.array("userfile"), function (req, res) {
    console.log("file 여러 개(ver1): ", req.files);

    res.send("파일 여러 개 업로드");
});


// fields(): 파일 여러 개 업로드 (name(input)이 두 개 이상 여러 개의 파일을 받는 방법)
// 배열로 이름을 직접 지정
// req.files 생성 files는 기본적으로 여러 개 받을 수 있음. (클라이언트에서 multiple 속성 사용)
app.post("/upload/fields", uploadDetail.fields([{name: "userfile1"}, {name: "userfile2"}]), function (req, res) {
    console.log("file 여러 개(ver2): ", req.files);
    console.log("req.body: ", req.body);

    // res.render("result", {
    //     src: req.files.path,
    //     title: req.body.title,
    // })
    res.send("파일 여러 개 업로드");
});


app.post("/upload/dynamic", uploadDetail.single("userfile"), function (req, res) {
    res.send({ src: req.file.path });
});
// 동적 폼전송은 랜더 하면 안됨 당연함 다른 파일을 연여는 방식이아님


app.listen(PORT, function () {
    console.log(`Sever Open: ${PORT}`);
});