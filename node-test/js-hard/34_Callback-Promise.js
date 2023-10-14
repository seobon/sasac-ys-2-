//-------------------- 문제 1 콜백 함수 --------------------
// function call(name, cb) {
//     setTimeout(function () {
//         console.log(name);
//         cb(name);
//     }, 1000);
// }

// function back(cb) {
//     setTimeout(function () {
//         console.log('back');
//         cb('back');
//     }, 1000);
// }

// function hell(cb) {
//     setTimeout(function () {
//         cb('callback hell');
//     }, 1000);
// }

// call('kim', function (name) {
//     console.log(name + '반가워');
//     back(function (txt) {
//         console.log(txt + '를 실행했구나');
//         hell(function (message) {
//             console.log('여기는 ' + message);
//         });
//     });
// });

//-------------------- 콜백 -> 프로미스 --------------------
function call(name) {
    return new Promise((resolve) => {
        setTimeout(function () {
            console.log(name);
            resolve(name);
        }, 1000);
      });
}


function back() {
    return new Promise((resolve) => {
        setTimeout(function () {
            console.log('back');
            resolve('back');
        }, 1000);
    });
}

function hell() {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve('callback hell');
        }, 1000);
    });
}

// call('kim')
// .then((result) => {
//     console.log(result + '반가워');
//     return back();
// })
// .then((result) => {
//     console.log(result + '를 실행했구나');
//     return hell();
// })
// .then((result) => {
//     console.log('여기는 ' + result);
// })

//-------------------- 프로미스 -> Async / Await --------------------

async function exec() {
    const x = await call('kim');
    console.log(x + '반가워');
    const y = await back();
    console.log(y + '를 실행했구나');
    const z = await hell();
    console.log('여기는 ' + z);
}

exec()
