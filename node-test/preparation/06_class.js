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


class Cat {
    constructor (name2, age2) {
        this.name = name2;
        this.age = age2;
    }

    mew () {
        console.log("야아옹")
    }
    
    info () {
        console.log(`이름은 : ${this.name}, 나이는 ${this.age}살`)
    }
}

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
// first.age();


class Apartment extends House{
    constructor(name, year, floor) {
        super(name, year);
        this.floor = floor;
    }

    // 오버라이딩. 부모에 있는 메소드를 자식이 다시 정의하는 것.
    age() {
        super.age();
        console.log(`입주는 ${this.year + 1}년부터 시작했습니다.`)
    }
}

const jugong = new Apartment("주공아파트", 1987, 20)
console.log(jugong.name, jugong.floor)
jugong.age();


// // 오버라이딩과 오버로딩
// // 오버로딩 : 똑같은 함수의 이름으로 여러 개의 함수를 선언하는 것 (매개변수가 다르다.)
// function test(a, b) {
//     console.log(`a: ${a}, b: ${b}`)
// }

// // 해결하고 싶다면? 조금의 기술을 써서 하나의 함수로 조건에 따라서 잘 실행되게 할 수 있다.
// function test(a, b = 0, c = 0) {
//     console.log(`a: ${a}, b: ${b}, c: ${c}`)
//     return a + b + c
// }

// test(1,5)