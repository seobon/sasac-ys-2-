// ---------------- case 1)-----------------
// 파일에서 한 개의 식별자만 내보내는 경우
const addReceive = require("./math.js");

// require은 모듈을 불러오는 함수.

const sum = addReceive(2,3);
console.log(sum)


// ---------------- case 2)-----------------
// 파일에서 여러 개의 식별자를 객체 형태로 내보내는 경우
// 모듈을 받아올 때 객체를 그대로 mathReceive로 받음
// const mathReceive = require("./math.js");

// const sum = mathReceive.addGive(5, 7);
// console.log(sum);
// console.log(mathReceive.PI);


// ---------------- case 3)-----------------
// 파일에서 여러 개의 식별자를 객체 형태로 내보내는 경우
// 특정 식별자(addGive, minusGive)만 필요한 경우 객체 구조 분해 할당 문법을 통해 가져올 수 있다.

// const { addGive, minusGive } = require("./math.js");

// const sum = addGive(2,3);
// console.log(sum)

// console.log(PI) // 오류 발생

// 메모리상 효율적이다.