const addGive = (a,b) => a + b;
// const minusGive = (a,b) => a - b;
// const PI = 3.14;

// 아래와 같은 의미의 코드. 중괄호가 없으면 값을 리턴하겠다는 의미이다.
// const addGive = (a,b) => {
//     return a + b;
// }

// module.exports.addGive = (a,b) => a + b;
// module.exports.minusGive = (a,b) => a - b;
// module.exports.PI = 3.14;

// 아래는 위와 같은 의미의 코드이다.
// module.exports = {
//     addGive,
//     minusGive,
//     PI,
// };


// ---------------- case 1)-----------------
// 파일에서 한 개의 식별자만 내보내는 경우

// 위 addGive 함수를 모듈화 하고 싶으면
// module.exports = addGive;
// 이 방법 없이는 다른 파일에서 코드를 가져갈 수 없다.

// ---------------- case 2), 3)-----------------
// 파일에서 여러 개의 식별자를 객체 형태로 내보내는 경우

// module.exports = {
//     addGive,
//     minusGive,
//     PI,
// };

// 원래 딕셔너리는 key : value 의 형태였지만 이건 좀 다르다. 이걸 해석하자면 아래와 같은 의미이다.
// {
//     addGive : addGive,
//     minusGive : minusGive,
//     PI : PI,
// };





