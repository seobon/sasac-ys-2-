// import { Component } from "react";

// class HandlerEx extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             text: "Hello World!",
//         };

//        this.Goodbye = this.Goodbye.bind(this)
//     }

//     Goodbye() {
//         this.setState({text: "Goodbye World!"});
//     }
    
//     render() {
//         return(
//             <>
//                 <div>{this.state.text}</div>
//                 <button onClick={this.Goodbye}>hey</button>
//             </>

//         )
//     }
// }



import { useState } from "react";

// function HandlerEx() {
//     const [ color, setColor ] = useState("black");
//     const [ colorName, setColorName ] = useState("검정");

//     function Red() {
//         setColor("red");
//         setColorName("빨간");
//     };

//     function Blue() {
//         setColor("blue");
//         setColorName("파란")
//     };
    
//     return(
//         <>
//             <div style={{ color: color }}>{colorName}색 글씨</div>
//             <br />
//             <button onClick={Red}>빨간색</button>
//             <button onClick={Blue}>파란색</button>
//         </>
//     )
// }



// function HandlerEx() {
//     const [ display, setDisplay] = useState("block");
//     const [ anotherDisplay, setAnotherDisplay] = useState("none");

//     function disappear() {
//         setDisplay("none");
//         setAnotherDisplay("block");
//     };

//     function discover() {
//         setDisplay("block");
//         setAnotherDisplay("none");
//     };
    
//     return(
//         <>
//             <button onClick={disappear} style={{ display : display }}>사라져라</button>
//             <button onClick={discover} style={{ display : anotherDisplay }}>보여라</button>
//             <br />
//             <div style={{ display : display }}>안녕하세요</div>
//         </>
//     )
// }



function HandlerEx() {
    const [ fruit, setFruit ] = useState("/apple.jpg");
    const [ Bcolor, setBColor ] = useState("black");
    const [ color, setColor ] = useState("white");
    const [ text, setText ] = useState("text");
    
    return(
        <>
            <select onChange={(e)=>{
                    setFruit(e.target.value);
                }}>
                <option value="/apple.jpg" >사과</option>
                <option value="/banana.jpg">바나나</option>
                <option value="/peach.jpg">복숭아</option>
                <option value="/orange.jpg">오렌지</option>
            </select>
            <select onChange={(e)=>{
                    setBColor(e.target.value);
                }}>
                <option value="black">검정</option>
                <option value="white">하양</option>
                <option value="red">빨강</option>
                <option value="orange">주황</option>
                <option value="yellow">노랑</option>
                <option value="green">초록</option>
                <option value="blue">파랑</option>
                <option value="purple">보라</option>
                <option value="pink">분홍</option>
            </select>
            <select onChange={(e)=>{
                    setColor(e.target.value);
                }}>
                <option value="black">검정</option>
                <option value="white">하양</option>
                <option value="red">빨강</option>
                <option value="orange">주황</option>
                <option value="yellow">노랑</option>
                <option value="green">초록</option>
                <option value="blue">파랑</option>
                <option value="purple">보라</option>
                <option value="pink">분홍</option>
            </select>
            <br />
            내용 : <input onChange={(e)=>{
                    setText(e.target.value);
                }}/>
            <br />
            <img src={fruit} style={{ height : "200px" }} />
            <div style={{ backgroundColor : Bcolor, color : color }}>{text}</div>
        </>
    )
}

export default HandlerEx