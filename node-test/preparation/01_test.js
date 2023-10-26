function first() {
    second();
    console.log(1);
    return;
}

function second() {
    console.log(2);
    return;
}

first()

function run() {
    console.log("3초 뒤 실행")
}

console.log("시작");
setTimeout(run, 3000);
console.log("끝");

