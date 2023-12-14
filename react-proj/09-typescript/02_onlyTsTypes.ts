type gender = "Women" | "Men";
// const lily: gender = "abcd"
const lily: gender = "Women"

// [상품명, 가격]
// 위와 같은 방식으로 튜플을 만듬
type productInfo = [string, number];
const cola: productInfo = ["cola", 2500];

// 객체에 대한 타입을 지정할 경우
// 대문자로 시작하는 관습이 있단다.
interface ProductInfo2 {
    productName: string,
    price: number
}

const cider: ProductInfo2 = { productName: "cider", price: 2500 };
// const cider: ProductInfo2 = { productName: "cider", price: 2500, sale: 10} // error

// interface, type은 똑같은 용도고 똑같은 객체 타입이다.
// 하지만 객체를 선언한 때는 interface를 사용하는게 더 일반적이다
type ProductInfo3 = {
    productName: string;
    price: number;
    sale?: number;
    // sale: number | undefined;
};


const beer: ProductInfo3 = { productName: "beer", price: 2500 }
console.log(beer.sale)

interface Seller {
    name: string;
};

interface ProductInfo4 {
    productName: string;
    price: number;
    sale?: object;
    seller?: Seller;
};

const soju: ProductInfo4 = {
    productName: "soju",
    price: 2000,
    // seller: { name : "lily" },
};

// optional chaining
console.log(soju.seller?.name) // 물음표 없으면 error 난다
// soju.seller -> sellersms optional한 key -> undifined가 될 수 있음
// undifined에는 aaa 함수 or 속성이 없습니다.
// Ts에서 위 오류를 미리 잡아주는 것이라고 생각하면 된다

interface Person {
    name: string;
    age: number;
}

interface Student extends Person{
    studentID: string;
    eat: (aaa:number) => void;
}

const person: Person = { name: "lily", age: 88 };

const stu: Student = { name: "lily", age: 88, studentID: "00000000", eat: () => console.log("밥을 먹는다.")}


// 실습
// 아래 나와 있는 heroGame_A 와 heroGame_B 를 만족할 수 있는 interface Game 만들어보기
interface Game {
    title: string;
    price: number;
    desc?: string;
    category: string;
    platform: string;
}

let heroGame_A: Game = {
    title: 'DC 언체인드',
    price: 50000,
    desc: 'DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!',
    category: '액션',
    platform: '모바일',
  }

  let heroGame_B: Game = {
    title: 'MARVEL 퓨처파이트',
    price: 65000,
    category: '롤플레잉',
    platform: '모바일',
  }