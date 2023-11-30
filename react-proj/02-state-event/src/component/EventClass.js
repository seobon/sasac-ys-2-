import { Component } from "react";

class EventClass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: "hello",
        };

        // 클래스형 문법에서 함수 표현식으로 선언문이 있는데, handleOnClick () => {} 이렇게 사용할 수 있다.
        // 함수 선언문을 사용해서 메소드를 만들 때 메소드 내부에서 클래스의 this를 사용하고 싶을 경우,
        // 생성자 내에서 this를 bind해주는 작업이 필요하다 따로 메소드마다 this가 각각 존재하기 때문이다. bind는 변수를 넘겨주는 함수이다.
        this.handleOnClick = this.handleOnClick.bind(this)
        // 클래스 내부에 있는 함수를 사용하려면 this를 타고 들어가야 한다. 변수앞에 this.를 깜박하면 안된다.
    }

    // 함수 선언문을 사용하여 메소드를 정의
    // 함수 내부에서 자체적은 this를 만들 수 있고, this가 클래스의 this가 아니게 된다.
    
    // 해결법 1. 생성자 매부에서 htis를 원하는 것으로 바인딩
    // 해결법 2. 함수 표현식을 사용한다.
    // 함수 선언문은 동적 바인딩을 하기 때문에 함수가 사용될 때 this가 결정된다.
    handleOnClick(e) {
        console.log(e)
        this.setState({msg: "bye"});
    }
    // 함수가 길어질 것을 우려해 함수를 밖에 빼두었다.

    // 함수 표현식은 함수가 선언될 때 this를 결정지움. 함수를 선언하는 코드를 읽을 때 this가 결정됨
    handleOnClickeHello = () => {
        this.setState({msg: "hello"});
    }

    render() {
        return (
            <>
                <h3>클래스형 컴포넌트 event 핸들링 공부</h3>

                {this.state.msg}
                <button onClick={this.handleOnClick}>
                {/* 실행시키면 안되는 이유 버튼 클릭할 때 실행되기를 원하는데,
                 스테이트가 달라져 재랜더링이 될때마다 함수가 실행되게 된다. */}
                    잘 가
                </button>
                <button onClick={this.handleOnClickeHello}>
                    안녕
                </button>

                {/* event를 받아올 때는 주로 줄여서 e라고 한다. */}
                <button onClick={(e) => {
                    // e 는 리액트 합성 이벤트 객체이다.
                    // 그래서 합성 이벤트에 대한 모든 정보를 담고 있다.
                    // 그 중에 target이라는 것에 접근을 하면, 이벤트가 걸린 태그를 확인 할 수 있음.
                    console.log(e);
                    console.log(e.target);
                    console.log(e.type);
                }}>
                    test
                </button>
            </>
        )
    }
}

export default EventClass;