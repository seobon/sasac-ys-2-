import { Component } from "react";

class PracClass extends Component {
    state = {
        number: 0
    }

    render() {
        return (
            <>
             <div>
                state number value {this.state.number}
                <br />
                <button onClick={() => {
                    this.setState((prevState) => {
                        return {number: prevState.number + 2}
                    })
                }}>+2</button>{" "}
                <button onClick={() => {
                    this.setState((prevState) => {
                        return {number: prevState.number - 1}
                    })
                }}>-1</button>
            </div>
            </>
        )
    }
}

export default PracClass;