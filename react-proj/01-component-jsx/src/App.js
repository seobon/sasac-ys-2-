import "./App.css";
import ClassComponent from "./components/ClassComponent";
import FuncComponent from "./components/FuncComponent";
import FuncPropsEx from "./components/FuncPropsEx";
import Section from "./components/Section";
import ClassPropsEx from './components/ClassPropsEx';
import PropsPrac from "./components/PropsPrac";

// JS에서는 오류가 나도 콘솔에 오류가 띄어질뿐 랜더가 가능한 부분은 랜더가 되었었는데,
// 리액트는 브라우저에 오류가 굉장히 크게 뜨게된다. 당황하지말고 오류메세지를 읽으면 된다.

const name = "삼식이";
const animal = "샴고양이";
const a = 5;
const b = 27;

// function App() {
//   return (
//   <div>
//     {/* 컴포넌트를 불러오는 방법은 두 가지이다 */}
//     <FuncComponent />
//     {/* <FuncComponent> </FuncComponent> */}
//     {/* 리액트는 무조건 종료를 명시해줘야한다 */}
//     <ClassComponent />
//     {/* 함수형과 클래스형은 문법은 다르지만 불러오는 방법은 똑같다. */}
//     <h2>제 반려 동물의 이름은 {name}입니다. {name}은 {animal}입니다.</h2>
//     <div>{ 3 + 5 == 8 ? "정답입니다!" : "오답입니다!"}</div>
//     <div>{ a < b && "b가 a보다 큽니다"}</div>
//     <div className='prac'>
//       <div className='header'>Hello World</div>
//       <br />
//       <div>아이디 : <input></input></div>
//       <br />
//       <div>비밀번호 : <input></input></div>
//     </div>
//   </div>
//   );
// }



// function App() {
//   return (
//   <div>
//     {/* props를 사용할 땐 JS 코드로 넘겨줘야하기 때문에 중괄호 안에 숫자를 넣어야한다. ( Props )*/}
//     <FuncPropsEx title="SeSAC" content="hello world" number={5} />
//     {/* <FuncPropsEx content="hello world" number={5} /> */}

//     <Section title="SeSAC 영역" >
//       <div>SeSAC 영역의 content입니다.</div>
//     </Section>
//     <Section title="코딩온 영역">
//       <h5 content="hello worlds">코딩온 영역의 content입니다.</h5>
//     </Section>

//     <ClassPropsEx title="SeSAC" content="hello world" number={5} />
//   </div>
//   );
// }


function App() {
  return (
  <div>
    {/* <PropsPrac food="제육볶음"></PropsPrac> */}
    {/* <PropsPrac title="나의 하루는 4시 40분에 시작된다" author="김유진" price="13,500원" type="자기개발서"></PropsPrac> */}
    <PropsPrac></PropsPrac>
  </div>
  );
}



export default App;
