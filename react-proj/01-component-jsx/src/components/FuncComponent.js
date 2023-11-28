// const default FuncComponent = () => {
//     return <dev>함수형 컴포넌트입니다.</dev>;
// };

import image from "./react-logo.png"

function FuncComponent() {
    const text = "hello";
    // const name = "lily";
    const name = "richard";

    const ifRenderTest = () => {
        if(name === "lily") {
            // 태그도 return 가능
            return <div>안녕하세요!</div>;
        } else if (name === "richard") {
            return "안녕하세요...";
        } else {
            return "누구세요?";
        }
    }

    // const style = s;

    return (
    <>
        {/* 1. 하나의 태그로 감싸서 return */}
            <div>함수형 컴포넌트입니다.1</div>
            <div>함수형 컴포넌트입니다.2</div>

        {/* 2. js 문법 사용 가능. (변수)
        중괄호 안에 JS 코드를 작성할 수 있다.
        주석 조차 중괄호 안에 JS 주석을 사용한다.
        그래서 JS처럼 변수를 사용하고 싶을 땐 중괄호를 사용하면 된다*/}
        <h3>코딩온 {text}</h3>

        {/* 2. js 문법 사용 가능.
        (삼항연산자를 이용한 조건에 따른 렌더링.
        하지만 삼항연산자의 한계로 인해 간단한 것만 작성 가능하다.)*/}
        <h4>{name === "lily" ? "안녕하세요!" : "누구세요?"}</h4>

        {/* 2-1 복잡한 조건을 걸고 싶다면 함수를 따로 정의하고 실행하는 것은 가능하다.
        참고로 함수실행도 JS문법이라 중괄호 안에 작성해야한다.)*/}
        <h4>{ifRenderTest()}</h4>

        {/* 2-2 조건에 따른 렌더링 ( && )
        앞에 조건이 참일 경우에만 뒤 조건을 읽기 때문에 참일 경우에만 무언가를 실행하고 싶다면
        아래와 같이 && 논리연산자를 활용하는 것이 가능하다*/}
        <h5>{ name === "lily" && "안녕하세요!"}</h5>

        {/* 3 인라인 style 적용 방법 > style 속성값으로 객체 전달.
        JS 문법안에 객체로 전달해야하기 때문에 중괄호를 두 번 써야한다.
        그리고 dash-case는 전부 camelCase로 바꿔야한다*/}
        {/* <div style="font-size: 20px"></div> */}
        <div style={{ fontSize: '20px', color: 'red' }}>hello</div>
        {/* <div style={style}>hello</div> */}

        {/* 4. class와 onclick을 JSX에서 사용하기.
        <div class="" onClick="함수()">원래 HTML에서 사용하던 방식</div> */}
        <div className="test-css">js에서 css 사용하기 (className)</div>

        {/* html에서는 함수를 "호출", jsx에서는 함수를 "선언" */}
        <button onClick={() => {
            // 함수();
            console.log("hello")
        }}>버튼</button>


        {/* 5. 종료 태그 필수! */}
        <br />
        {/* /경로가 public 폴더 안이다. */}
        <img src="/logo192.png" />

        {/* src 내부의 이미지를 사용할 경우 -> 위에서 이미지를 import 해오기 */}
        <img src={image} />
    </>
);
}
// 리액트에 가장 기본적인 문법은 여러 태그를 넣더라도 모든 태그는 하나의 태그에 넣어야 한다는 것이다.

// 바벨이 아래와 같은 코드처럼 해석을 해준다.
// const = document.createElement("div")
// div,innerText = '함수형 컴포넌트입니다.'

export default FuncComponent;