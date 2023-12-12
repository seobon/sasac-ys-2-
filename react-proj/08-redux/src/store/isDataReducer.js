const initialValue = false;

const isDataReducer = (state = initialValue, action) => {
    switch(action.type) {
        case 'CHANGE' :
            // 이런 CHANGE 뭐 INCREMENT 이런 것은 다른 관리 파일의 요소 이름과 중복될 수 있으므로
            // 구조화를 잘 해서 관리해야한다.
            // 같이 부르면 아마 둘 다 실행될 것이라 미리 처리를 잘 해두기를
            return !state
        default:
            return state;
    }
};

export default isDataReducer;