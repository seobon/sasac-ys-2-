import './App.css';
import StateClass from './component/StateClass';
import StateFunc from './component/StateFunc';
import PracClass from './component/PracClass';
import PracFunc from './component/PracFunc';
import EventClass from './component/EventClass';
import EventFunc from './component/EventFunc';
import HandlerEx from './component/ex/HandlerEx';

function App() {
  return (
    <div>
      {/* <StateClass name ="lily" />
      <StateFunc />
      <PracClass />
      <PracFunc />
      <EventClass />
      <EventFunc /> */}
      <HandlerEx />
    </div>
  );
}

export default App;
