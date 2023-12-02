import { useState } from "react"
import ColorSelect from "./ColorSelect"

function Practice4 () {
    // 이미지를 같은 용도로 사용한다면 같은 확장자인 것이 좋습니다.
    const [fruit, setFruit] = useState("apple")
    const [bgColor, setBgColor] = useState("black")
    const [color, setColor] = useState("white")
    const [content, setContent] = useState("text")
    
    return (
    <>
        <label>과일</label>
        <select onChange={(e) => {
            setFruit(e.target.value);
        }}>
            <option value="apple">사과</option>
            <option value="banana">바나나</option>
            <option value="peach">복숭아</option>
            <option value="orange">오렌지</option>
        </select>
        {/* 컴포넌트는 직접 이벤트를 걸 수 없기 때문에 onChange 함수는 똑같이 못 쓴다
        그러므로 함수를 따로 걸었다 onChangeHandler는 임의로 정한 이름이고, 컴포넌트에서 변수로 넘겨받으면 된다.*/}
        <ColorSelect mode="배경" onChangeHandler={(e) => {
            setBgColor(e.target.value);
        }}/>
        <ColorSelect mode="글자" onChangeHandler={(e) => {
            setColor(e.target.value);
        }}/>
        <br />

        <label>내용: </label>
        <input type="text" value={content} onChange={(e) => {
            setContent(e.target.value)
        }}/>

        <br />
        <img src={`/${fruit}.jpg`} width={200}></img>

        <div style={{ backgroundColor : bgColor, color : color }}>{content}</div>
    </>
    )

}

export default Practice4