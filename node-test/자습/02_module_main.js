// ---------------- case 1)-----------------

// const addReceive = require("./02_module_sub.js");

// // console.log(addReceive)

// console.log(addReceive(2,7));

// const sum = addReceive(1,9);
// console.log(sum);

// ---------------- case 2)-----------------
// const mathReceive = require("./02_module_sub.js");
// // console.log(mathReceive)

// const sum = mathReceive.addGive(5, 7);
// console.log(sum);
// console.log(mathReceive.PI);

// ---------------- case 3)-----------------


// 특정 식별자(addGive, minusGive)만 필요한 경우 객체 구조 분해 할당 문법을 통해 가져올 수 있다.

// const { addGive, minusGive } = require("./02_module_sub.js");

// const sum = addGive(2,3);
// console.log(sum)

// console.log(PI) // 오류 발생

// 메모리상 효율적이다.