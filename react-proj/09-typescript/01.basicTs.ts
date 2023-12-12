// let str = "hello";
let str: string = "hello";
// str = 5; // error

// const, var 당연히 사용가능
// 선언과 할당을 따로하는 것도 당연히 가능

console.log(str);

let num: number;
num = 19980527;

let undif: undefined = undefined;
// undif = 3; // error
let nu: null = null;
// nu = 3; // error

// 값을 할당하는 순간 undefined, null이 아니게 되기 때문에 할당 불가능
// 그러므로 const 사용 불가능
// 각각 undefined, null은 값으로 할당 가능. (교차는 안됨)

// 숫자로 이루어진 배열의 type number[]
let arr: number[] = [1, 2, 3, 4, 5];

// 문자로 이루어진 배열의 type string[]
let setArr: string[] = ["abc", "def"];
let setArr2: Array<string> = ["abc", "def"];

let numStrArr: (number | string)[] = [1, "a"];
let numStrArr2: Array<number | string> = [1, "a"];

let abc: number | string = "a";
abc = 5;


// any 사용은 되도록 지양하세요 ts를 쓰는 이유가 없습니다.
// 받아오는 데이터가 어떤 타입일지 알 수 없는 경우에는 any를 써야겠지만
// 그런 상황이 아니라면 자료형을 꼭 지정해주어야한다.
let anyArr: any[] = [1, "a", null, undefined, {}];

let obj: object = {
    name: "lily",
};

// Tuple
let drink: [string, number] = ["beer", 2500];
// 위 다른 규칙은 빈배열은 넣을 수 있었지만, 여기서는 무족건 값을 넣어줘야한다.
console.log(drink[0]);
drink[0] = "cider";
console.log(drink[0]);
drink.push("aaa")
console.log(drink);
// Tuple의 한계. 위처럼 할당하는 건 오류로 잡지만, push 메소드를 이용하면 오류를 잡아주지 못해서 값이 들어간다

// readonly 읽기만 가능하다.
let drink2: readonly [string, number] = ["beer", 2500]
// drink2[0] = "cider"; // error
// drink2.push("aaa") // error


// Enum
// 날씨 데이터를 판별한다고 하자.
// sun, rain, cloud 처럼 특정 값 몇개 중 선택을 하면된다.
enum Weather {
    sun,
    rain,
    cloud,
}

console.log(Weather.sun)

const weather = 0;

if(weather == Weather.sun) {
    console.log("맑은 날씨")
}

let aaaaa : Weather = 0;
// let aaaaa : Weather = 3; // error

enum Weather2 {
    sun = "sun",
    rain = "rain",
    cloud = "cloud",
}

console.log(Weather2.sun)