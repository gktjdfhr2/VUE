import React from 'react';
import './Hello.css';
function Hello() {
   //return (<div><h1>안녕하세요.123</h1></div>)
   const name ="성록";
   return(
       <>
            <button>eirwerwer</button>
            <div>
                <h2> 리액트 기본 문법 테스트</h2>
                 <p>반가워요 {/*문자열 */ name }</p>
            </div>
            <div className='gray-div'>
                <h2> 리액트 기본 문법 테스트 222</h2>
            </div>
            <input/>
       </>
   )
}
export default Hello;