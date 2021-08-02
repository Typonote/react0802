import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

// header태그 컴포넌트 생성
function HeaderTag(props) {

  function headerClickHandler(e){
    e.preventDefault();
    props.onChageMode();
  }

  return (
    <header>
      <h1>
        <a href="index.html" onClick={headerClickHandler}>WEB</a>
      </h1>
    </header>
  );
}

// NavTag태그 컴포넌트 생성 => for문 으로 lis배열 만들어서 return함.
function NavTag(props){
  
  function navClickHandler(e){
    e.preventDefault();
    // e.target.dataset.id을 통해 data-id값을 받을 수 있다.
    props.onChageMode(e.target.dataset.id);
  }

  

  var lis = [];
  for(var i=0; i<props.data.length; i++){
    lis.push(<li><a href={props.data[i].id+".html"} onClick = {navClickHandler} data-id={props.data[i].id}>{props.data[i].title}</a></li>);
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

// HeaderTag의 WEB을 클릭하면 onChangeMode에 입력한 함수가 실행되어 어떤 작업을 수행하도록 설정
function App() {
  console.log('App render');
  var [mode, setMode] = useState('WELCOME');

  function onChageModeHeader(){
    console.log('onChangeModeHeader');
    setMode('WELCOME')
  }

  function onChageModeNav(id){
    console.log('onChangeModeNav', id);
    setMode('READ')
    // id값에 따라 UI를 변경하는 코드 
  }

  var article = null;

  if(mode === 'WELCOME') {
    article = <ReadTag title="Welcome" desc="Hello, WEB"></ReadTag>
  } else if(mode ==='READ'){
    article =<ReadTag title="READ" desc="Hello, READ"></ReadTag>
  }

  return (
    <div className="App">
        <HeaderTag onChageMode={onChageModeHeader}></HeaderTag>
        <NavTag onChageMode={onChageModeNav} data={[
          {id:1, title:'HTML', desc:'HTML is ...'},
          {id:2, title:'CSS', desc:'CSS is ...'}
        ]}></NavTag>
        {article}
    </div>
  );
}

export default App;
