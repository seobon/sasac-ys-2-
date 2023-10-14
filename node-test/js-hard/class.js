const cat = {
    name: '애옹이',
    age: 2,
    mew: function () {
        console.log("야옹");
    },
}

const cat2 = {
    name: '삼식이',
    age: 10,
    mew: function () {
        console.log("야옹");
    },
}

const cat3 = {
    name: '회식이',
    age: 8,
    mew: function () {
        console.log("야옹");
    },
}

// cat3.mew();


// PascalCase 규칙을 이용해서 식별자 생성
// camelCase에서 첫글자도 대문자로 바꾼 방식

// new Date{

// }

class Cat {
    // constructor는 생성자를 의미. 메소드의 일종.
    // (메소드 중에서) Cat 클래스를 이용해서 객체를 만드는 순간에 호출되는 메소드.
    // 함수의 일종이라 매개변수 받아오기 가능.
    // 원래는 같은 이름 쓰는 게 대부분임.
    constructor (name2, age2) {
        this.name = name2;
        this.age = age2;
    }

    // 아래도 메소드
    // 클래스는 함수를 funtion 키워드 없이 바로 작성
    mew () {
        console.log("야아옹")
    }
    
    // 고양이의 정보를 콘솔로 찍는 메소드
    info () {
        console.log(`이름은 : ${this.name}, 나이는 ${this.age}살`)
    }
}

// Cat() = constructor () 호출, 괄호 안 매개변수를 일치시켜주어야함
// Cat() 클래스를 이용해서 새 객체를 만들겠다는 의미
const cat4 = new Cat("야옹이", 6)
// cat4.mew();

const cat5 = new Cat("장화", 3)
// console.log(cat4.name, cat5.name)

// cat4.info();

class House {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    age() {
        console.log(`건축된지 ${new Date().getFullYear() - this.year}년 되었어요`)
    }
}

const first = new House("pigHouse1", 1991)
first.age();

class Apartment extends House{
    constructor(name, year, floor) {
        // 부모(House)의 생성자 호출
        super(name, year);
        this.floor = floor;
    }

    // 오버라이딩. 부모에 있는 메소드를 자식이 다시 정의하는 것.
    age() {
        super.age();

        console.log(`건축된지 ${new Date().getFullYear() - this.year}년 되었어요`)
        console.log(`입주는 ${this.year + 1}년부터 시작했습니다.`)
    }
}

// 오버라이딩과 오버로딩
// 오버로딩 : 똑같은 함수의 이름으로 여러 개의 함수를 선언하는 것 (매개변수가 다르다.)
function test(a, b) {
    console.log(`a: ${a}, b: ${b}`)
}

// 해결하고 싶다면? 조금의 기술을 써서 하나의 함수로 조건에 따라서 잘 실행되게 할 수 있다.
function test(a, b = 0, c = 0) {
    console.log(`a: ${a}, b: ${b}, c: ${c}`)
    return a + b + c
}

test(1,5)


const jugong = new Apartment("주공아파트", 1987, 20)
console.log(jugong.name, jugong.floor)
jugong.age();

