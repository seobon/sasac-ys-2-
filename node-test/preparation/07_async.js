// console.log(1);
// setTimeout(function(){
//     console.log(2);
// }, 2000);
// console.log(3);


// function add(n1, n2, cb) {
//   setTimeout(function () {
//     let result = n1 + n2;
//     cb(result);
//   }, 1000);
// }

// function mul(n, cb) {
//   setTimeout(function () {
//     let result = n * 2;
//     cb(result);
//   }, 700);
// }

// function sub(n, cb) {
//   setTimeout(function () {
//     let result = n - 1;
//     cb(result);
//   }, 500);
// }

// add(4, 3, function (x) {
//   console.log("1: ", x);
//   mul(x, function (y) {
//     console.log("2: ", y);
//     sub(y, function (z) {
//       console.log("3: ", z);
//     });
//   });
// });


// function add(n1, n2) {
//   return new Promise(function (resolve, reject) {
//       setTimeout(function () {
//         let result = n1 + n2;
//         resolve(result);
//       }, 1000);
//   })
// }

// function mul(n) {
//   return new Promise (function (resolve, reject) {
//       setTimeout(function () {
//         let result = n * 2;
//         resolve(result);
//       }, 700);
//   })
// }

// function sub(n) {
//   return new Promise(function(resolve, reject){
//       setTimeout(function () {
//         let result = n - 1;
//         resolve(result);
//       }, 500);
//   })
// }

// add(4,3).then(function (result) {
//   console.log("1: ", result);
//   return mul(result);
// }).then(function (result) {
//   console.log("2: ", result);
//   return sub(result);
// }).then(function (result) {
//   console.log("3: ", result);
// });

// ----------------- 문제 발생 코드 ---------------------
// function goMart() {
//   console.log("마트에 가서 어떤 음료를 살지 고민한다.");
// }

// let product;
// let price;

// function pickDrink() {
//   setTimeout(function () {
//     console.log("고민 끝!!");
//     product = "제로 콜라";
//     price = 2000;
//   }, 3000);
// }

// function pay(product, price) {
//   console.log(`상품명: ${product}, 가격: ${price}`);
// }

// goMart();
// pickDrink();
// pay(product, price);

// ----------------- callback 함수로 해결한 코드 ---------------------
// function goMart() {
//   console.log("마트에 가서 어떤 음료를 살지 고민한다.");
// }

// let product;
// let price;

// function pickDrink(callback) {
//   setTimeout(function () {
//     console.log("고민 끝!!");
//     product = "제로 콜라";
//     price = 2000;
//     callback(product, price);
//   }, 3000);
// }

// function pay(product, price) {
//   console.log(`상품명: ${product}, 가격: ${price}`);
// }

// goMart();
// pickDrink(pay);

// ----------------- Promise 로 해결한 코드 ---------------------
function goMart() {
    console.log("마트에 가서 어떤 음료를 살지 고민한다.");
  }
  
let product;
let price;
  
function pickDrink() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("고민 끝!!");
      product = "제로 콜라";
      price = 2000;
      resolve();
    }, 3000);
  });
}

function pay(product, price) {
  console.log(`상품명: ${product}, 가격: ${price}`);
}

// goMart();
// pickDrink().then(() => {
//   pay(product, price);
// }).catch(function (err) {
//   console.log("에러", err);
// });


async function exec() {
    goMart();
    await pickDrink();
    pay(product, price);
}

exec();
