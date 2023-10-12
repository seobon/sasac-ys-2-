const fruits = ["apple", "banana", "grape"]

const [ apple2, banana2 = "banana3", grape2, straw2 = "straw" ] = fruits
// console.log(apple2, straw2, banana2);
// console.log(banana2); // 이건 재정의가 안되고 banana2는 banana3가 아니라 banana로 남아있다.

// 아래 코드는 위 코드와 같은 의미를 가진다. 위처럼 배열 분해를 사용하면 코드가 더 간결해짐을 알 수 있다.
// const apple2 = fruits[0]
// const banana2 = fruits[1]
// const grape2 = fruits[2]


let x = 1, y = 3;

// 아래와 같은 의미로, 순서와 상관 없이 두 값을 치환하고 싶다.
// x = y // X = 3, y = 3
// y = x // X = 3, y = 3
// 두 값을 치환하기 위해선 임시로 필요없는 변수 하나를 더 만들어야 한다.

[x, y] = [y, x]
// 그래서 구조분해를 이용하면 값 치환도 보다 수월하게 할 수 있다.

const obj = {
    name: "lily",
    gender: "여",
    age: 99,
};

const { age, name: name2 , test = "test" } = obj
// 이 코드는 기본적으로 원래이름과 같은 이름의 키를 가지지만,
// 키를 바꾸고싶다면 원래이름: 바꾸고싶은이름 으로 작성이 가능하다.

// 아래 코드는 위 코드와 같은 의미를 가진다.
// const age = obj.age;
// const name = obj.name;

// console.log(age, test, name2)


const arr1 = [1, 2, 3, 4, 5];
const arr2 = ["a", "b", "c", "d", "e"];

// [1, 2, 3, 4, 5, "a", "b", "c", "d", "e"]

// const arr3 = [arr1[0], ~~~]
// 하드코딩 에바. 조금만 바뀌어도 원하는 결과가 안나오거나 오류가 난다
// for

const arr3 = [...arr1, ...arr2];
// console.log("arr3", arr3);

const hello = [..."hello"];
// console.log("hello", hello);

//실습
const word1 = "abc";
const word2 = "xyz";

const abc = [...word1];
const xyz = [...word2];

const result = [...abc, ...xyz];

// console.log(result);


//새로운 딕셔너리 요소를 추가하는 방법으로 자주 쓰이는 방법.
const obj2 = {
    name: "lily",
    gender: "여",
    age: 99,
};

const obj3 = {
    ...obj2,
    test: "test",
}

// console.log(obj3);


// rest 파라미터, 함수에 파라미터로 사용됨

const values = [10, 20, 30];

function get(a, ...rest) {
    console.log(a);
    console.log(rest);
};

get(...values);

// 위 코드를 설명하면 ...인자는 변수의 값을 스플릿하듯 나누어주는 것이다.
// 그 중 첫번째 요소는 a에 담고 그 나머지는 ...rest를 이용해 rest에 담는 코드인 것이다.