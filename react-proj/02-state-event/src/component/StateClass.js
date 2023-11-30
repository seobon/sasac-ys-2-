import { Component } from "react";

class StateClass extends Component {
    // 옛날 방식
    // constructor() {
    //     super() // super()는 부모 클래스의 생성자이다.
    //     // super()를 실행시켜야 this 객체를 사용할 수 있다.

    //     this.state = {
    //         number: 0,
    //         text: "hello"
    //     }
    // }

    // 만약 클래스에서 생성자를 만들지 않으면 기본 생성자가 자동으로 생성된다.
    // 기본 생성자는 this를 사용할 수 있게 해준다.
    // 기본 생성자의 구조는 아래와 같다.
    // constructor(props) {
    //     super(props)
    // }

    // 최근 방식
    state = {
        number: 0,
        text: "hello"
    }

    render() {
        // 아래와 같이 구조분해도 가능
        // const { number } = this.state;
        return (
            <>
                <div>props 예시 {this.props.name}</div>
                <h3>클래스형 컴포넌트 state 공부</h3>
                <div>
                    number state value {this.state.number}{" "}
                    <button onClick={() => {
                        // state 변경은 보통 일반 변수 변경 시키듯이 변수에 값을 재할당하는 것이 아니고,
                        // state를 변경시키는 함수를 사용한다. 클래스형 컴포넌트는 setState라는 메소드가 제공된다.

                        // this.setState({number: this.state.number + 1});
                        // this.setState({number: this.state.number + 1});
                        // 위와 같이 작업한다고 해도 숫자가 2씩 늘어나지 않는다. 왜냐면 스테이트는 비동기 처리이때문에
                        // 첫번째 셋스테이트가 끝나기 전에 즉 숫자 number가 0에서 1이 되기 전에 두번째 셋스테이트가 실행되기 때문이다.

                        // 그래서 콜백함수의 형태로 함수를 작성해야한다.
                        this.setState((prevState) => {
                            return{number : prevState.number + 1}
                        });
                        // this.setState((prevState) => {
                        //     return{number : prevState.number + 1}
                        // });

                        // 그리고 중괄호를 쓰지 않고 바로 무언가를 리턴하는 것도 가능하다.
                        this.setState((prevState) => ({number : prevState.number + 1}));
                    }}>+2</button>
                </div>
            </>
        )

    }
}

export default StateClass;