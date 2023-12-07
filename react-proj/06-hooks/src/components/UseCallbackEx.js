import { useState, useCallback } from "react"

// useCallback : useMemo는 값을 기억했다면, useCallback은 함수를 기억한다.
// 재랜더링 될 때 확인할 순 없지만, 컴포넌트 내부에 있는 함수도 다시 선언하게 된다.
// 다시 선언할 필요가 없는 함수는 다시 선언하지 않고, 이전에 선언한 함수를 사용할 수 있다면 효율적일 것이다.
// 이것을 도와주는게 useCallback이다.

// state(아래 text같은거)나 프롭스 같은 변경될 수 있는 변수를 함수에서 사용하는 것이 아니면
// 함수를 재선언할 필요가 없다.
// 아래에서 setText를 이용해 text의 값을 바꾸지만, 바뀐 text를 활용하는 함수는 아니기 때문에 다시 선언할 필요가 없다.

// handleOnChange 함수에서는 UseCallbackEx컴포넌트에서 유일하게 변경될 수 있는 값인 text 활용하고 있다
export default function UseCallbackEx() {
    const [text, setText] = useState('');

    // 의존성 배열이 빈값일 경우, 처음 마운트 될 때 선언된 함수를 계속 기억하고 있다가,
    // update 될 때 다시 선언하지 않고 기억하고 있는 함수를 활용하고
    const handleOnChange = useCallback((e) => {
        setText(e.target.value);
    }, [])

    return (
        <>
            <h3>useCallback 공부</h3>

            <input type="text" value={text} onChange={handleOnChange} />
        </>
    )
}