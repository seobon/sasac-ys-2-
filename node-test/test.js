function run() {
    console.log("3초 뒤 실행")
}

console.log("시작");

// 콜백함수 : 함수의 인자로 함수를 넘길 때, 인자로 넘기는 그 함수.
// 그래서 함수를 실행시키면 안된다. run() X.
// 아래 함수는 3초 뒤에 run 함수를 실행시키겠다는 이벤트 리스너이다.
setTimeout(run, 3000);
console.log("끝");