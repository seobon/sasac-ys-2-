import { useState } from "react"
import { useMemo } from "react";


// 컴포넌트가 달라질 때 마다 재랜더링이 되는데, 그때마다 수정된 것이 있고 수정되지 않은 것이 있을 것이다.
// 랜더링할 때 불필요한 연산을 방지하는 것이 useMemo이다.
export default function UseMemoEx() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');
    const [list, setList] = useState([]);

    // 콘솔이 계속 찍히고 있는것으로 미루어볼때 setText를 하는 동안에도 이 함수는
    // 쓸데 없이 계속 랜더링 될때마다 다시 연산을 하고 있다는 것이다. 비효율적이다.
    // 이것을 useMemo로 바꿔보겠다
    // const calc = () => {
    //     console.log("calc......");
    //     return count * 2;
    // }

    // useMemo(콜백함수, 의존성 배열)
    // useMemo: 불필요한 연산을 방지, 값을 기억함, count의 변경이 있을 때만 다시 연산하여 calc에 담음
    const calc = useMemo(()=>{
        console.log("calc......");
        return count * 2;
    }, [count]);

    return (
        <>
            <div>
                count: {count} <button onClick={() => setCount(count + 1)}>+1</button>
            </div>
            <div>calc: {calc}</div>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        </>
    )
}