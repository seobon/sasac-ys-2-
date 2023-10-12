const add = (a, b) => a + b;
// 중괄호가 없으면 값을 리턴하겠다는 의미이다.
const minius = (a, b) => a - b;
const pi = 3.14

// 1) 하나만 내보낼 경우
// module.exports = add
// export default add;

// 2) 여러개 내보낼 경우
// module.export = {
//         add,
//         minus,
// }
// export { add, minius };
// default는 써도 되고 안써도 되고

export default pi;
export { add, minius };