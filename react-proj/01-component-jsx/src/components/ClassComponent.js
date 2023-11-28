import { Component } from "react";

// 클래스 문법에서는 extends 뒤에 상속받으려는 요소를 적으면 된다
class ClassComponent extends Component {
    render() {
        return <div>클래스형 컴포넌트 입니다.</div>;
    }
}

export default ClassComponent;


// 이해가 안간다면 아래와 같은 구조를 그냥 외우면 된다.
// 상속의 개념을 알아둬야한다.

// import { Component } from "react";

// class ClassComponent extends Component {

// }