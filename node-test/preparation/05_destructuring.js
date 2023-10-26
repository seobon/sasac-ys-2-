const fruits = ["apple", "banana", "grape"]
// const [ red, yellow, purple ] = fruits

// let red = fruits[0]
// let yellow = fruits[1]
// let purple = fruits[2]

// console.log(red, yellow, purple);


// const [ red, yellow, purple, blue = "blueberry" ] = fruits

// console.log(red, yellow, blue);


const [ red = "strawberry", yellow, purple, blue = "blueberry" ] = fruits

// console.log(red, yellow, blue);


let x = 1, y = 3;

// x = y
// y = x

[x, y] = [y, x]

// console.log(x, y);


const obj = {
    name: "eunseo",
    age: 26,
    team: "WJSN"
};

// const age = obj.age;
// const name = obj.name;
// const group = obj.team;
// const tribe = "human";

const { age, name, team: group, tribe = "human"} = obj;

// console.log(age, group, tribe, name);


const arr1 = [1, 2, 3, 4, 5];
const arr2 = ["a", "b", "c", "d", "e"];

// [1, 2, 3, 4, 5, "a", "b", "c", "d", "e"]

// const arr3 = [arr1[0], arr1[1], arr1[2], arr1[3], arr1[4], arr2[0], arr2[1], arr2[2], arr2[3], arr2[4]]
// for...

const arr3 = [...arr1, ...arr2];
// console.log(arr3);

// const hello = [..."hello"];
// // console.log("hello", hello);


// const word = "abcdefg";

// const abc = [...word];

// console.log(abc);


const obj2 = {
    name: "eunseo",
    age: 26,
    team: "WJSN"
};

const obj3 = {
    ...obj2,
    job: "singer",
}

// console.log(obj3);


const values = [10, 20, 30];

function get(a, ...rest) {
    console.log(a);
    console.log(rest);
};

get(...values);