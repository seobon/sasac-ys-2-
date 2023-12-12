import { combineReducers } from "redux";

import calculator from "./calculator";

const rootReducer = combineReducers({
    calcul: calculator,
});

export default rootReducer;