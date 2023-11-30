import { useState } from "react";

function EventFunc() {
    const [msg, setMsg] = useState("hello");

    // 함수형 컴포넌트에서는 함수 선언문이든 표현식이든 신경쓸 필요가 없다.
    // 그렇다고 섞어 쓰라는 말은 아니다. 하나로 통일해라.

    const handleOnClick = (e) => {
        console.log(e);
        setMsg("가지마");
    };

    function handleOnClickHello() {
        setMsg("떠나지마");
    };

    const handleOnClickTest = (message, test) => {
        setMsg(message);
        console.log(test)
    };

    const [name, setName] = useState("");

    const handleEnter = (e) => {
        if (e.key == "Enter") {
            console.log("누가 이렇게 엔터를 누르니?!")
        }
    }

    return (
        <>
            <h3>함수형 컴포넌트 event 핸들링 공부</h3>
            <div>
                {msg}

                <button onClick={handleOnClick}>잘 가</button>
                <button onClick={handleOnClickHello}>기억해</button>

                {/* 함수에서 매개변수를 받고 싶으면 어떻게 하나요?
                첫번째 방법 onClick에서 익명함수를 선언하고, 그 내부에서 함수를 실행시킨다. */}
                {/* <button onClick={() => {
                    handleOnClickTest("나를 잊지마~");
                    }}>
                    나를 잊어줘~ 잊고 살아가줘~
                </button> */}

                {/* 두번째 방법 .bind를 이용한다.
                bind의 첫번째 매개변수는 . 앞에 있는 함수(handleOnClickTest)의 this를 결정하는 일로 결정되어 있다.
                그래서 첫번째 매개변수 자리에는 무엇을 넘겨도 제대로 넘어가지 않기 때문에 다른 기능의 매개변수를 사용하고 싶으면 두번째 매개변수 자리부터 순차적으로 사용하면 된다.
                여기서는 this로 따로 결정해줄 것이 없기 때문에 null을 넣었다. */}
                <button onClick={handleOnClickTest.bind(null, "나를 잊지마~", "아무 말 죄송합니다. 아니 아무 노래인가...?")}>나를 잊어줘~ 잊고 살아가줘~</button>

                <br />
                {/* 인풋태그에서 엔터를 누르면 "누가 이렇게 엔터를 누르니?!" 라는 문구가 콘솔에 찍히도록 할 것이다.*/}
                <input type="text" value={name} onChange={(e)=>{
                    setName(e.target.value);
                }} onKeyDown={handleEnter} />
                {/* 리액트는 다큐먼트 점 이런거 권장하지 않는다 그건 실제 DOM을 사용하는 것이기 때문이다.
                리액트는 가상 돔을 이용하기 때문에 실제 돔은 사용하지 않는다*/}
            </div>
        </>
    )
}

export default EventFunc;