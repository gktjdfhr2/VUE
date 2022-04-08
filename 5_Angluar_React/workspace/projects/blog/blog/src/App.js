import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello'


function App() {
  let nicName = "develok";
  let value ={ color:'blue', fontsize:'15px' };
  let [title, setTitle] = useState(['신촌 샤브샤브 맛집', '홍대 샤브샤브 맛집', '강촌 샤브샤브 맛집']); 
  let [like, setLike] = useState(0);
  // let [ title, setTitle] = useState{'data'};

  let [flag, setFlag] = useState(false);
  function changeTitle() {
    let newTitle =[...title] ;    
    newTitle[0]='서대문-맛집-리스트';
    setTitle(newTitle);
  }
  function onoff() {
    this.setFlag({flag: !this.state.MyModal})
  }


  return (
    <div className="App">
      
        <div className='nav'>
          <div>나의 소소한 일상 소개</div>
        </div>
        <div>{ nicName } 님 어서오세요!</div>
        {/* 함수내 매개변수 이용
        <p>
          ㅎㅇ 리액트
          <Hello message="메세지전송!"/>
        </p>         */}
        <div style={ {color:'red', fontsize: '30px' }}>태그 내 스타일</div>

        <div className='list'>
         <h3 >{ title[0] }<span onClick={()=>{setLike( like + 1)}}>👾</span> {like}</h3>
         <p>3월 30일 발행</p>
        </div>
        <button onClick={ changeTitle}>1</button>
        <div className="list">
          <h3>{title[1] } <span onClick={ ()=>{setLike( like+1)}}>👾</span> {like}</h3>
          <p>3월 31일 발행</p>
        </div>
        <button onClick={ changeTitle}>2</button>
        <div className="list">
          <h3 onClick={() => {setFlag(true)}}>{title[2] } <span onClick={ ()=>{setLike( like+1)}}>👾</span> {like}</h3>
          <p>월 01일 발행</p>
        </div>
        <button onClick={ () => {onoff()}}>3</button>
        {
          flag === true
          ? <MyModal /> : null
        }
        
    </div>
  );
}



function MyModal(props) {
  
  return(
  <>
      <div className="modal">
          <h2>{props.title}</h2>
          <p>날짜</p>
          <p>상세내용</p>
      </div>
  </>
  );      
}
export default App;