import {useState} from "react";

function ListMap () {
    // const [list, setList] = useState(["a", "b", "c"]);

    const productList = [
        { id: 1, product: "가방"},
        { id: 2, product: "패딩"},
        { id: 3, product: "신발"},
        { id: 4, product: "상의"},
        { id: 5, product: "하의"}
    ];

    const [list, setList] = useState(productList);
    const [newProduct, setNewProduct] = useState("")


    const addProduct = () => {
        // list와 추가할 객체를 합쳐줘야 함
        // 원래라면 새로운 상품을 백엔드에서 인설트 하고 생긴 PK 값을 ID에 담아두는 것이 좋지만
        // 지금은 length를 이용하도록 하겠다.
        const newObj = { id: list[list.length - 1].id + 1,  product: newProduct };
        // const newList = [...list, newObj]
        // 스프레드 연산자 복습하세요

        const newList = list.concat(newObj)
        // 스테이트 리스트는 push를 사용할 수 없다 newList.push()~~ X
        setList(newList)
    }

    const deleteProduct = (id) => {
        // 더블클릭한 상품에 대해서 삭제를 해야함

        const newList = list.filter((value) => 
            // filter 메소드는 앞에 있는 배열에 대해서 반복한다
            // 리턴값에 조건을 걸거고, 조건이 참이면 true, 거짓이면 false가 떠서
            // true면 newList에 담을 것이니까 필터링 기능이 가능한 것이다.
            value.id != id)
            setList(newList);
        // rendering 할 때 list 배열을 이용함. -> list 배열에서 원하는 요소를 삭제해야함.
        // 삭제된 버전의 배열을 setList를 이용하여 list 상태를 변경
    }

    // 이 맵은 결국 어떤 함수냐면 앞에 있는 배열에 대해서 반복을 하면서,
    // map의 인자로 넘어가는 콜백함수의 return값을 이용해 새로운 배열을 생성함.
    return (
    <>
        <label>추가할 상품: </label>
        <input type="text" value={newProduct} onChange={(e)=>{
            setNewProduct(e.target.value);
        }}/>
        <button onClick={addProduct}>추가</button>
        <ul>
            {list.map((value)=>{
                return <li key={value.id} onDoubleClick={()=>{
                    deleteProduct(value.id)
                }}>{value.product}</li>;
            })}
        </ul>
    </>
    );
}

export default ListMap;