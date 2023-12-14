import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(
  // 다른 코드는 기존 리액트 파일과 같은데 다음 코드만 다르다.
  // const root = ReactDOM.createRoot(document.getElementById('root'));
  // 기존 코드는 root가 없으면 null, undifined 값을 넣어준다.
  // as를 타입 단언이라고 한다.
  // #root 요소가 존재한다고 확신하면 as를 사용해 타입 단언을 할 수 있다.
  document.getElementById('root') as HTMLElement

);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);