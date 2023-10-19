// 1) 하나만 내보낼 경우

// const addGive = (a, b) => a + b;
// // const minius = (a, b) => a - b;
// // const pi = 3.14

// // module.exports = add
// export default addGive;


// 2) 여러개 내보낼 경우

const addGive = (a, b) => a + b;
const miniusGive = (a, b) => a - b;
const pi = 3.14

// module.export = {
//         addGive,
//         miniusGive,
// }
// export { addGive, miniusGive };
// export default pi;


export { addGive, miniusGive };
export default pi;