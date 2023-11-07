const crypto = require("crypto");

function createHashedPw(pw) {
    return crypto.createHash("sha512").update(pw).digest("base64");
    // sha512 알고리즘를 이용하겠다.
    // 가장 간단한 암호화 양식 완성
};
// 이제 하나의 객체가 되었다.

console.log("pw 1234: ", createHashedPw("1234"));
console.log("pw 1235: ", createHashedPw("1235"));

const input = "1234";
// const input = "12345678";
const dbPw =
    "1ARVn2Auq2/WAqx2gNrL+q3RNjAzXpUfCXrzkA6d4Xa22yhRLy4AC50E+6UTPoscbo31nbOoq51gvkuXzJ6B2w==";

console.log("compare result: ", createHashedPw(input) == dbPw);
// 이런 방식으로 비밀번호를 비교해서 로그인에 활용하게 된다.


function createHashedPwWithSalt(pw) {
    const salt = crypto.randomBytes(16).toString("base64");
    console.log("salt: ", salt);
    const interations = 100;
    const keylen = 64;
    const digest = "sha512"
    return crypto
        .pbkdf2Sync(pw, salt, interations, keylen, digest)
        .toString("base64");
    // 암호화할 문자열. salt, 반복횟수, 키의 길이, 알고리즘
    // 반복횟수가 높을수록 보안이 좋다고 한다
};

console.log("pw 1234 with salt: ", createHashedPwWithSalt("1234"))

// const dbPwSalt =
//     "aqO9+kVxbRBRLW4e1EtnLTHU8eZE1biw+EKPbx9Xh/oQdN41lEq6TBBTaDE1f3DrCk6Ng15fFcYS1rQCjqepPQ==";
// console.log("compare result: ", createHashedPwWithSalt(input) == dbPwSalt);
// 이렇게 하면 임의의 값인 솔트가 추가되어서 이 둘이 같을리가 없다.
// 그래서 db에 그 당시 사용했던 솔트값도 저장해야한다.

function comparePw(pw, salt) {
    const interations = 100;
    const keylen = 64;
    const digest = "sha512";
    return crypto
        .pbkdf2Sync(pw, salt, interations, keylen, digest)
        .toString("base64");
};

const dbPwSalt =
    "aqO9+kVxbRBRLW4e1EtnLTHU8eZE1biw+EKPbx9Xh/oQdN41lEq6TBBTaDE1f3DrCk6Ng15fFcYS1rQCjqepPQ==";
const dbSalt =
    "KYjibMlQXyQypa8zFdUqIw==";

    console.log("pw 1234 with salt: ", comparePw(input, dbSalt) == dbPwSalt);
