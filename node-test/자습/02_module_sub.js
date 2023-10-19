// ---------------- case 1)-----------------

// const addGive = (a,b) => a + b;

// module.exports = addGive;

// ---------------- case 2), 3)-----------------

// module.exports.addGive = (a,b) => a + b;
// module.exports.minusGive = (a,b) => a - b;
// module.exports.PI = 3.14;

// 아래는 위와 같은 의미의 코드이다.
// module.exports = {
//     addGive,
//     minusGive,
//     PI,
// };

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