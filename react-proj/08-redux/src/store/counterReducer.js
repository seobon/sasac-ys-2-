// 상수 선언(정보를 더 넣어 보낸다)
// 다른 리듀스 액션이랑 겹치지말라고 추가한 것이다.
const INCREMENT = "counter/INCREMENT";
const DECREMENT = "counter/DECREMENT";

// 발생할 수 있는 action을 return 하는 함수.
// 만든 이유는 action.type의 이름이 바뀐다라고 가정하고, 액션을 발생시키는 모든 곳(dispatch)에서
// action.type을 다 변경해줘야하는데, 이를 해결하기 위해 만들었다.
export const increase = () => ({ type: INCREMENT });
export const decrease = () => ({ type: DECREMENT });

const initialValue = { number : 100 };

const counterReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "INCREMENT": // INCREMENT 상수 선언 전 ver.3
    case INCREMENT: // INCREMENT 상수 선언 후 ver.3-1
      return { number: state.number + 1 };
    case "DECREMENT":
    case DECREMENT:
      return { number: state.number - 1 };
    default:
      return state;
  }
};

export default counterReducer;