import './App.css';
// 얘를 불러오는 것만으로도 css가 적용될 수 있다.
// import OriginCss from './components/OriginCss';
import CssModule from './components/CssModule';
import SassComponents from './components/SassComponents';
import StyledComponent from './components/StyledComponent';
import PracStyle from './components/PracStyle';
// import './styles/pracstyle.scss'

function App() {
  return (
    <div>
      {/* <OriginCss />
      <hr /> */}
      {/* <CssModule />
      <hr /> */}
      {/* <SassComponents /> */}
      {/* <StyledComponent /> */}
      <PracStyle />
    </div>
  );
}

export default App;
