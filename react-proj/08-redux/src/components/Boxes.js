// 직접적으로 스토어에 접근하지 않고 UI 부분만 가져온다

import { Box2Container, Box4Container } from "../containers/BoxesContainer";


// 변수는 프롭스로 받아온다
export function Box1({number}) {
    return (<div className='box'>
      <h3>number: {number}</h3>
      <Box2Container />
    </div>)
}



export function Box2({number}) {
    return (<div className='box'>
      <h3>number: {number}</h3>
      <Box3 />
    </div>)
}

export function Box3({number}) {
    return (<div className='box'>
        <Box4Container />
    </div>)
}

export function Box4 (props) {
    const { number, isData, counterIncrease, counterDecrease, isDataChange} = props;
    return (<div className='box'>
        <h3>number: {number}</h3>
        <button onClick={counterIncrease}>plus</button>
        <button onClick={counterDecrease}>minus</button>

        <div>isData {`${isData}`}</div>
        <button onClick={isDataChange}>change</button>
    </div>)
}