const bcrypt = require("bcrypt");

const salt = 10;

function bcryptPw (pw) {
    return bcrypt.hashSync(pw, salt);
};

function comparePw(pw, dbPw) {
    return bcrypt.compareSync(pw, dbPw);
}

console.log("pw 1234: ", bcryptPw("1234"));

// const pw = "1234";
const dbPw = bcryptPw("1234");

console.log("compare pw: ", comparePw(pw, dbPw));

// 해쉬에 솔트값이 포함된, 즉 사용자가 입력한 값마다 솔트값이 지정되어 있는 형태란다... 왜 안쓰이는지 알겠다 근데 요즘은 많이 쓴단다
// 아무튼 배포할건데 비밀번호 암호화를 하지 않으면 정말 큰 문제가 생길 수도 있다(소송 같은 거..)