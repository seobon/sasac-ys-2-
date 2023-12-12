import { combineReducers } from "redux";
// 여러개의 리듀서를 컴바인 하겠다. 그걸 도와주는 것
// 지금은 counterReducer 파일 밖에 없고,
// 또 한파일안에 여러 리듀서를 관리할 수도 있지만
// 만약 여러 파일로 여러 속성을 각각 관리한다고 가정하면 컴바인을 해야한다.
import counterReducer from "./counterReducer";
import isDataReducer from "./isDataReducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    // counter라는 key를 하나 더 넣은 셈이다.
    // 그래서 App.js 같은 곳에서 한 번 더 타고 들어가야 데이터에 접근이 가능하다
    isData: isDataReducer,
});

export default rootReducer;