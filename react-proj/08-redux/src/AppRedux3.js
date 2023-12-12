import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "./store/counterReducer";
import { Box1Container } from "./containers/BoxesContainer";

// containers 폴더
// redux store에 직접적으로 접근하는 컴포넌트를 모아두기 위해서.

// components 폴더
// 보통 presentational 컴포넌트만 저장.
// redux store에 직접적으로 접근하지 않는 컴포넌트만을 모아둠

// 위처럼 분리하지 않아도 된다. 하지만 일반적으로 그렇게 한다.

function AppRedux3() {
  return (
    <div>
        <Box1Container />

    </div>
  );
}

export default AppRedux3;
