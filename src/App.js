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

// NavTag태그 컴포넌트 생성
function NavTag() {
  return (
    <nav>
      <ol>
        <li>
          <a href="1.html">html</a>
        </li>
        <li>
          <a href="1.html">css</a>
        </li>
      </ol>
    </nav>
  );
}

// NavTag태그 컴포넌트 생성
function ReadTag() {
  return (
    <article>
        <h2>Welcome</h2>
        Hello, React
    </article>
  );
}



function App() {
  return (
    <div className="App">
        <HeaderTag></HeaderTag>
        <NavTag></NavTag>
        <ReadTag></ReadTag>
    </div>
  );
}

export default App;
