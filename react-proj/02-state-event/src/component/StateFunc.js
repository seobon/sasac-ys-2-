// 함수형 컴포넌트에서는 State가 기본적으로 정의 되지 않았다.
// 그래서 useState라는 훅을 불러온다는데...

import { useState } from "react";

function StateFunc() {
    // useState는 배열을 반환한다 -> 그 배열을 구조분해해서 number와 setNumber를 선언한다
    // 앞에 있는 number는 변수를 리턴하고, setNumber는 state를 변경시키는 함수를 리턴한다.
    // useState(State 초기값)
    // 참고로 setNumber 등의 변수 이름은 원하는대로 설정해도 된다.
    const [number, setNumber] = useState(0);
    const [text, setText] = useState("hello");

    return (
        <>
            <h3>함수형 컴포넌트 state 공부</h3>
            <div>
                state number value {number}{" "}
                <button onClick={() => {
                    // 함수형도 마찬가지로 비동기 처리라 아래처럼 작성해도 숫자가 2씩 늘어나지 않는다.
                    // setNumber(number + 1)
                    // setNumber(number + 1)

                    setNumber((prevNumber) => prevNumber + 1)
                    setNumber((prevNumber) => prevNumber + 1)
                    }}>+2</button>
            </div>
        </>
    )
}

export default StateFunc;