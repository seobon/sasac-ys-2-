// function abc () {
//     console.log("abc");
// };

// 함수 자체의 type -> 함수가 실행되어 결국 return 값
function sum(a: number, b: number): number {
    return a + b;
    // return "hello" // error
};
console.log(sum(1, 2))

// 옵셔널 매개변수
// const sum1 = (a:number, b?:number): number => {
//     if(b) return a + b;
//     return a;
// };

interface Calculator {
    sum: (a:number, b:number) => number
    sub?: () => void
}

const calc: Calculator = {
    sum: sum
}

// never는 에러객체도 리턴하기 때문에, 그런 방식으로도 사용한다
// 그런데 거의 사용할 일이 없다.
function goingOn(): never {
    while(true) {
        console.log("go");
    }
}

// void: 함수 자체의 return 값이 없을 때 사용한다.
// function hello(a:string): void {
//     console.log("hello")
// }


// 함수 오버로딩
// function hello(a:string, b:string ): void {
//     console.log("hello")
// }

// 오버로딩을 사용하기 위해선 중복해서 정의할 함수를 미리 정의 해놓아야한다.
// 오버로딩 -> 함수의 이름은 같으나, 형태가 다른 함수 (매개변수)
function hello(num: number): number;
function hello(str: string, str2: string): string;

function hello(param: any, param2?: any) {
  console.log(param);
  console.log(param2);
  return param;
}

hello(2);
hello("hello", "world");


// 실습 1
// 두 개의 수를 매개 변수로 받고 합을 console.log 로 출력하는 함수 sum1 만들기
function sum1(a: number, b: number): number {
    return a + b;
};
sum1(5, 11); // 테스트는 이렇게 하기!
console.log(sum1(5, 11));

// 실습 2
// 매개 변수로 여러 개의 수를 받고 전달된 값을 모두 더하는 함수 sum2
// 모두 합산한 값을 "return" 합니다.
// Hint: 전개 연산자 이용하기
function sum2(...numbers: number[]): number {
    return numbers.reduce((sum, num) => sum + num, 0);
  }

// 테스트는 이렇게!
console.log(sum2(1, 2, 3, 4, 10)); // 20
