import { useRef } from "react";
// Ref는 기본으로 제공하는 것이 아니라서 import 해야함

function FuncRef () {
    const input = useRef();
    const localVar = useRef(0);
    // 아래와 같은 의미이다
    // const localVar = 0;

    const focusInput = () => {
        input.current.focus();
    }

    const plusLocalVar = () => {
        localVar.current++;
        console.log(localVar.current)
    }

    return (
        <>
            <input type="text" ref={input}/>
            <button type="button" onClick={focusInput}>버튼</button>
            
            <div>{localVar.current}</div>
            <button type="button" onClick={plusLocalVar}>버튼</button>
        </>
    )
}

export default FuncRef;