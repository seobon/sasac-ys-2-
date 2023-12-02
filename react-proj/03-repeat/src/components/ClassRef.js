// 클래스형 컴포넌트에서는 ref가 기본으로 제공되서 불러올 필요가 없다

// 아래 둘 중 뭘 써도 상관 없다
// import React, { Component } from "react";
import { Component, createRef } from "react";

class ClassRef extends Component {
    // input = React.createRef();
    // React 타고 들어가도 안들어가도 상관 없다
    input2 = createRef();


    // 콜백함수를 이용하여 ref를 지정했을 때, ref 변수를 사용하는 방법
    focusInput = () => {
        this.input.focus();
    }

    focusInput2 = () => {
        this.input2.current.focus();
    }

    render() {
        return (
            <>
                {/* 콜백함수를 이용하여 ref를 지정 */}
                {/* <input type="text" ref={(ref)=>{
                    // ref에 콜백함수를 넘길 때 첫번째 매개변수는
                    // 현재 ref가 걸려있는 요소를 담고 있다.
                    // 여기서는 input를 담고 있다.
                    // ref를 사용하기 위해서 다른 변수에 담아둔 것이다.
                    // class에서는 this를 사용해야함을 잊으면 안된다
                    this.input = ref
                }} /> */}


                {/* 클래스 내부의 변수는 모두 this를 타고 들어가야한다. */}
                <input type="text" ref={this.input2}/>
                <button type="button" onClick={this.focusInput2}>버튼</button>
            </>
        )
    }
}

export default ClassRef;