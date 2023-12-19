import "../styles/chat.css";
import { useEffect, useState } from "react";
import Chat from "./Chat";
import Notice from "./Notice";
import io from "socket.io-client"

const socket = io.connect("http://localhost:8000", { autoconnect: false})

export default function Chatting1() {
  const [msgInput, setMsgInput] = useState("");
  const [chatList, setChatList] = useState([
    {
        type: "my",
        content: "안녕?",
    },
    {
        type: "other",
        content: "응 안녕?",
    },
    {
        type: "notice",
        content: "OO님이 입장하셨습니다",
    },
]);

const initSocketConnect = () => {
    console.log("connected", socket.connected)
    if (!socket.connected) socket.connect();
};

useEffect(() => {
    initSocketConnect()

    // 마운트 시에만 한 번 읽고 말아요
    // 
}, []);

useEffect(()=>{
    const notice = (res) => {
        const newChatList = [...chatList, {type : "notice", content: res.msg }]
        
        setChatList(newChatList);
    }
    socket.on("notice", notice);
    return () => socket.off("notice", notice)
    // chatList가 업데이트 되지 않는 문제점을 해결하기 위해서
    // chatList가 변화할 때마다 업데이트되게 만들면 이벤트가 계속 발생한다
    // 그래서 socket.off()를 이용해 이벤트를 삭제할 것이다.    
}, [chatList]);

  const sendMsg = () => {};
  return (
    <>
    <h3>실습 2, 3번</h3>
    <ul>
        <li>채팅창 UI</li>
        <li>socket id 이용하여 누가 입장했는지 공지 띄우기</li>
    </ul>
      <div className="chat-container">
        {chatList.map((chat, i) => {
            if (chat.type === "notice")
                return <Notice key={i} chat={chat} />;
            else
                return <Chat key={i} chat={chat} />;
        }
        )}
      </div>

      <div className="input-container">
        <input
          type="text"
          value={msgInput}
          onChange={(e) => setMsgInput(e.target.value)}
        />
        <button onClick={sendMsg}>전송</button>
      </div>
    </>
  );
}