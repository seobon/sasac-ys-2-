// ver.1 props drilling 예시
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);


// ver.2 redux 적용
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import AppRedux1 from './AppRedux1';


// import { Provider } from 'react-redux';
// Provider라는 컴포넌트를 어디서 불러왔는지도 확인해야한다
// 다른 곳에서도 부를 수 있기 때문에 (react-redux) 꼭 확인해라
// import { configureStore } from "@reduxjs/toolkit"
// import { composeWithDevTools } from 'redux-devtools-extension';

// const initialValue = { number : 100 };
// // state: { number : 100 }
// const reducer = (state = initialValue, action) => {
//   switch(action.type) {
//     case 'INCREMENT' :
//       return {number : state.number + 1};
//     case 'DECREMENT' :
//       return {number : state.number - 1};
//     default:
//       return state;
//   }
// };

// const store = configureStore({reducer: reducer}, composeWithDevTools())
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Provider store={store}>
//     <AppRedux1 />
//   </Provider>
// );



// ver.3 리덕스 구조화
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import AppRedux2 from './AppRedux2';

// import { Provider } from 'react-redux';
// // Provider라는 컴포넌트를 어디서 불러왔는지도 확인해야한다
// // 다른 곳에서도 부를 수 있기 때문에 (react-redux) 꼭 확인해라
// import { configureStore } from "@reduxjs/toolkit"
// import { composeWithDevTools } from 'redux-devtools-extension';

// import rootReducer from "./store"

// const store = configureStore({reducer: rootReducer}, composeWithDevTools())
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Provider store={store}>
//     <AppRedux2 />
//   </Provider>
// );


// ver.4 리덕스 구조화 + containers 컴포넌트 폴더 / presentational 컴포넌트 폴더 분리
// 이건 어렵고 복잡하다면 포기해도 된다. 다른것부터 공부하세요
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import AppRedux3 from './AppRedux3';

// import { Provider } from 'react-redux';
// import { configureStore } from "@reduxjs/toolkit"
// import { composeWithDevTools } from 'redux-devtools-extension';

// import rootReducer from "./store"

// const store = configureStore({reducer: rootReducer}, composeWithDevTools())
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Provider store={store}>
//     <AppRedux3 />
//   </Provider>
// );


// ver.실습
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PracApp from './PracApp';

import { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit"
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from "./store/Pracindex"

const store = configureStore({reducer: rootReducer}, composeWithDevTools())
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PracApp />
  </Provider>
);