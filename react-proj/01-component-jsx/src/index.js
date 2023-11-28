import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 개발할때 사용하는 도구 콘솔을 두번찍어주는 등.. */}
    <App />
  </React.StrictMode>
);

