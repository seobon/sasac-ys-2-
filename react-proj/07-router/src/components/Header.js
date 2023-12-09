import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <header className="Header">
                <div className="logo">Router study</div>
                <nav>
                    <div>
                        <Link to="/">Home</Link>
                    </div>
                    <div>
                        <Link to="/products">Product</Link>
                    </div>
                    <div>
                        <Link to="/photos">Photo</Link>
                    </div>
                    {/* a 태그는 사실상 새로고침을 하면서, 페이지 이동 기능을 한다.
                    그런데 리액트는 사용자 경험을 중요시 여기기 때문에 새로고침을 하지않고
                    페이지를 이동하는 방식을 사용할 수 있다.
                    Link 컴포넌트는 그것이 가능하다*/}
                </nav>
            </header>
        </>
    )
}