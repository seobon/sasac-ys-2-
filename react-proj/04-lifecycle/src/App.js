import { useState } from 'react';
import './App.css';
import LifeCycle from './components/LifeCycle';
import LifeCycleClass from './components/LifeCycleClass';
import PostList from './components/PostList';

function App() {
  const [number, setNumber] = useState(0);
  const [isShow, setIsShow] = useState(true);

  return (
    <div>
      {/* <button onClick={() => setNumber(number + 1)}>plus</button>
      <button onClick={() => setIsShow(!isShow)}>
        {isShow ? "OFF" : "ON"}
      </button> */}
      {/* {isShow && <LifeCycle number={number} />} */}
      {/* {isShow && <LifeCycleClass number={number} /> } */}
      <PostList />

    </div>
  );
}

export default App;
