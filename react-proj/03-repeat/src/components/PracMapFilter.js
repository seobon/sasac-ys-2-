import {useState} from "react";

// function PracMapFilter () {
//     const userList = [
//         { id: 1, name: "주연", email: "eunseo0527@naver.com"},
//         { id: 2, name: "루다", email: "luda0206@naver.com"}
//     ];

//     const [user, setUser] = useState(userList)
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");

//     const addUser = () => {
//         const newObj = { id: userList.length + 1, name: name, email : email}

//         const newUser = user.concat(newObj)
//         setUser(newUser)
//     }

//     const addUserEnter = (e) => {
//         if (e.key == "Enter") {
//             const newObj = { id: user.length + 1, name: name, email : email}

//             const newUser = user.concat(newObj)
//             setUser(newUser)
//         }
//     }

//     const deleteUser = (id) => {
//         const newUser = user.filter((value)=>value.id != id)
//         console.log(id)
//         setUser(newUser)
//     }

//     return (
//         <>
//             <input placeholder="이름" type="text" value={userList.name} onChange={(e)=>{
//             setName(e.target.value);
//         }} onKeyDown={addUserEnter}/>
//             <input placeholder="이메일" type="text" value={userList.email} onChange={(e)=>{
//             setEmail(e.target.value);
//         }} onKeyDown={addUserEnter}/>
//             <button onClick={addUser}>등록</button>
//             <ul>
//                 {user.map((value) => {
//                     return <h1 key={value.id} onDoubleClick={()=>{deleteUser(value.id)}}>{value.name}: {value.email}</h1>;
//                 })}
//             </ul>
//         </>
//     )
// }



function PracMapFilter () {
    const list = [
        { id:1, name: "야", title: "왜"}
    ];

    const [visitorList, setVisitorList] = useState(list)
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [select, setSelect] = useState("name");
    const [findThing, setFindThing] = useState("");
    const [findAll, setFindAll] =useState("");


    const addList = () => {
        const newObj = { id: visitorList.length + 1, name: name, title: title }

        const newList = visitorList.concat(newObj)

        setVisitorList(newList)
    }

    const findList = () => {
        if (select == "name") {
            const newList = visitorList.filter((value) => value.name == findThing)
            setFindAll(newList);
            console.log("여기다", newList)
        } else if (select == "title") {
            const newList = visitorList.filter((value) => value.title == findThing)
            setFindAll(newList);
            console.log("저기다", newList)
        }
        
    }
    return (
        <>
            <fieldset>
                <div>작성자 : <input type="text" value={name} onChange={(e)=>{
                    setName(e.target.value);
                }}/></div>
                <div>제목 : <input type="text" value={title} onChange={(e)=>{
                    setTitle(e.target.value);
                }}/></div>
                <button onClick={addList}>작성</button>
            </fieldset>
            <br />
            <select onChange={(e)=>{
                    setSelect(e.target.value);
                }}>
                <option value="name">작성자</option>
                <option value="title">제목</option>
            </select>{" "}
            <input placeholder="검색어" onChange={(e)=>{
                    setFindThing(e.target.value);
                }} />{" "}
            <button onClick={findList} >검색</button>
            <br />
            <br />
            <table>
                <thead>
                    <tr>
                        <td className="td">번호</td>
                        <td className="td">제목</td>
                        <td className="td">작성자</td>
                    </tr>
                </thead>
                <tbody>
                    {visitorList.map((value)=>{
                        return <tr key={value.id}>
                            <td>{value.id}</td>
                            <td>{value.title}</td>
                            <td>{value.name}</td>
                        </tr>
                    })}
                </tbody>
            </table>
            {findAll.map((value)=>{
                if ( findAll.length == 0) {
                    return <div>
                            <div>검색 결과가 없습니다.</div>
                        </div>
                } else {
                    return <div>
                        <div>검색 결과</div>
                        <tr key={value.id}>
                            <td>{value.id}</td>
                            <td>{value.title}</td>
                            <td>{value.name}</td>
                        </tr>
                </div>
                }
            })}
        </>
    )
}


export default PracMapFilter;