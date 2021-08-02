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
function NavTag(props){
  console.log('props.data', props.data);
  var lis = [];
  for(var i=0; i<props.data.length; i++){
    lis.push(<li>{props.data[i].title}</li>);
  }

  return (
    <nav>
      <ol>
        {lis}
      </ol>
    </nav>
  )
}

// NavTag태그 컴포넌트 생성
function ReadTag(props) {
  return (
    <article>
        <h2>{props.title}</h2>
        {props.desc}
    </article>
  );
}


function App() {
  return (
    <div className="App">
        <HeaderTag></HeaderTag>
        <NavTag data={[
          {id:1, title:'HTML', desc:'HTML is ...'},
          {id:2, title:'CSS', desc:'CSS is ...'}
        ]}></NavTag>
        <ReadTag title="Welcome" desc="Hello, WEB"></ReadTag>
    </div>
  );
}

export default App;
