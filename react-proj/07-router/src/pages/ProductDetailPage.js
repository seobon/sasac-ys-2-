import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

export default function ProductDetailPage() {
    const [product, setProduct] = useState(null);
    const [error, setError] = useState("Loading...");
    const { id } = useParams();
    console.log(id);
    // product/:id
    // params => { id: value, name: value }

    // ~~~~?id=2&name=lily
    // 쿼리를 가져오고 싶을 땐?
    const [query, setQuery] = useSearchParams();
    // query => {id: 2} 이렇게 안나옴
    console.log(query)
    console.log(query)

    // Link 컴포넌트를 이용하지 않고, js 함수 내부에서 페이지를 이동시키는 코드를 작성하고 싶을 때
    const navigator = useNavigate();

    const getProduct = async() => {
        try {
            // 오류가 날 수도 있는 코드를 try 안에 넣는다.
            const res = await fetch(
                `https://jsonplaceholder.typicode.com/posts/${id}`
            );
            if (res.ok) {
                const prod = await res.json();
                setProduct(prod);
            } else {
                throw Error("존재하지 않는 상품입니다.")
                // 에러를 던지는 방법
            }
        } catch (error) {
            // try 안에서 오류가 나면 catch 로 이동함
            console.log(error);
            setError(error.message);
        }
    }

    useEffect(()=> {
        getProduct()
    }, []);

    return (
        <>
            <div>여기는 상품 상세 페이지</div>
            <button onClick={()=> navigator(-1)}>목록으로 이동</button>
            {/* <button onClick={()=> navigator(2)}>목록으로 이동</button> */}
            <button onClick={()=> navigator("/")}>홈으로 이동</button>
            {/* setQuery는 인자로 보내준 정보를 이용하여 새로운 쿼리를 만들고 */}
            {/* <button onClick={()=> setQuery({name: "codee", id: 5})}>setQuery 테스트</button> */}
            {product ? <ul>
                <li>번호: {product.id}</li>
                <li>상품명: {product.title}</li>
            </ul> : <div>{error}</div>}
        </>
    );
}