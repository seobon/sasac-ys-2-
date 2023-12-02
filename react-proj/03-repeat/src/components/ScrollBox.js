import { useRef } from "react";

function ScrollBox() {
    const box = useRef();
    const scrollTop = () => {
        box.current.scrollTop = 0
    }
    return (
        <>
            <div className="scroll-box" ref={box}>
                <h1>살려조요</h1>
                <h1>살려조요</h1>
                <h1>살려조요</h1>
                <h1>살려조요</h1>
                <h1>살려조요</h1>
                <h1>살려조요</h1>
                <h1>살려조요</h1>
            </div>
            <button onClick={scrollTop}>올라갑니다~</button>
        </>
    )
}

export default ScrollBox;