import logo from './logo.svg';
import './App.css';

// header태그 컴포넌트 생성
function HeaderTag() {
  return (
    <header>
      <h1>
        <a href="index.html">
          web
        </a>
      </h1>
    </header>
  );
}



function App() {
  return (
    <div className="App">
        <HeaderTag></HeaderTag>
    </div>
  );
}

export default App;
