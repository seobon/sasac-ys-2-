import { useReducer, useState, useCallback } from "react";
import UseCallbackEx from "./UseCallbackEx";

const initialValue = { value: 0 };
const reducer = (prevState, action) => {
    switch(action.type) {
        case "PLUS":
            return { value: prevState.value + 1 };
        case "MINUS":
            return { value: prevState.value - 1 };
        case "MULTIFLY":
            return { value: prevState.value * action.number };
        case "DIVISION":
            return { value: prevState.value / action.number };    
        case "RECET":
            return initialValue;
        default:
            return { value: prevState.value }
    }
}

// state: 상태
// dispatch: 액션을 발생시키는 함수
// reducer: 실질적으로 상태를 업데이트 하는 함수 (결국 dispatch가 실행시키는 함수)

export default function UseReducer() {
    const [state, dispatch] = useReducer(reducer, initialValue);
    const [number, setNumber] = useState(0);

    const plus = () => dispatch({ type: "PLUS"});
    const minus = () => dispatch({ type: "MINUS"});
    const reset = () => dispatch({ type: "RECET"});
    const multifly = () => dispatch({ type: "MULTIFLY", number: number});
    const division = () => dispatch({ type: "DIVISION", number: number});

    const handleChangeNumber = useCallback((e) => setNumber(e.target.value))

// 지금은 간단한 기능 세개만 하고 있지만,
// 만약 더 많은 연산을 이용한다고 하면,
// 컴포넌트 자체가 복잡해져서 코드가 길어진다.
// setState 코드가 여기저기서 호출되서, state의 변화를 추적하려면 일일이 검색해봐야한다.
// useReducer를 사용하면 reducer 함수 하나만 봐도 setState를 호출하는 함수들의 목적을 한눈에 볼 수 있다.
// const [state, setState] = useState(initialValue);

// const plus = () => setState( {value: state.value + 1} );
// const minus = () => setState( {value: state.value - 1} );
// const reset = () => setState(initialValue);

    return (
        <>
            <h3>useReducer 공부</h3>
            <div>
                {state.value}
                <button onClick={plus}>+1</button>
                <button onClick={minus}>-1</button>
                <button onClick={reset}>reset</button>

                <input type="number" value={number} onChange={handleChangeNumber} />
                <button onClick={multifly}>곱하기</button>
                <button onClick={division}>나누기</button>
            </div>
        </>
    )
}