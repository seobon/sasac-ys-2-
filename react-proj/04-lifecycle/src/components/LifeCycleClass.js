import { Component } from "react";

class LifeCycleClass extends Component {
    state = {text: ''}

    // 1. 컴포넌트가 마운트 될 때 실행됨
    // 실행시키는 부분이 없어도 된다. 알아서 실행된다,
    // 하지만 오타나면 안된다. 반드시 componentDidMount라고 적어야한다.
    componentDidMount () {
        console.log("class component : ⭕ mount")
    }

    // 2. 컴포넌트가 업데이트 될 때 실행됨
    // 클래스형에서는 마운트 될 때는 안찍힌다.
    // 기본으로 설정된 매개변수가 세 개 정도 있는데 두 개만 말하자면 이전 Props, 이전 State이다
    componentDidUpdate (prevProps, prevState) {
        console.log("class component : ✅ update")

        // text state 가 변경될 때마다 if문 안에 있는 코드 실행시킴
        if(prevState.text != this.state.text) {
            console.log("class component : ✅✅text update")
        }
    }

    // 3. 컴포넌트가 unmount 될 때 실행됨
    // 세 개 전부 오타내면 안된다.
    componentWillUnmount () {
        console.log("class component : ❌ unmount")
    }



    render () {
        return (
            <>
                <h2>함수형 컴포넌트 LifeCycle 공부</h2>
                <div>number: {this.props.number}</div>
                <input type="text" value={this.state.text} onChange={(e) => this.setState({ text: e.target.value })} />
            </>
        )
    }
}

export default LifeCycleClass;