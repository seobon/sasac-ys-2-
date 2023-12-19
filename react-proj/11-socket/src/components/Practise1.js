import { useEffect, useRef } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:8000", { autoConnect: false });
// 여기도 http://localhost:8000/ 넣지 말기
// 이렇게 연결하면 ejs에서
// const socket = io()
// 이거 한거다.
// autoConnect: false 자동연결 안하게하는 설정

export default function Practise1() {
    const initSocketConnect = () => {
        if (!socket.connected) socket.connect();
        // 업데이트 등 다른 변화에도 코드가 실행되는 것을 방지
    };

    useEffect(()=>{
        initSocketConnect()

        socket.on("resHello", (res) => {
            console.log(res);
            // 아래 코드 빼먹어서 오류
            resultMsg(res);
        })
    }, []);
    // 마운트 될 때만 실행되도록 설정

    const resultMsg = (res) => {
        result.current.innerText = res.msg;
    }

    const hello = () => {
        socket.emit("hello", {msg: "hello"})
    };
    const study = () => {
        socket.emit("study", {msg: "study"})
    };
    const bye = () => {
        socket.emit("bye", {msg: "bye"})
    };

    const result = useRef(null);

    return (
        <>
            <h3>소켓 실습 1번</h3>
            <button onClick={hello}>hello</button>
            <button onClick={study}>study</button>
            <button onClick={bye}>bye</button>
            <p ref={result}></p>
        </>
    )
}