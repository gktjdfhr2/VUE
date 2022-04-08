/* eslint-disable */
import React from 'react';
import './App.css';
import MyComponents from './components/MyComponents'
import {MyComponentFunc, MyComponentFunc2, MyComponentFunc3} from './components/MyConponentFunc.js'

function App() {
  const str = "React!!!";
  const name = "함수형 컴포넌트";
    return (
      <div>
          <p>안녕333</p>
          <MyComponents msg={ str }  age={27} />
          <MyComponents age={100} />
          <MyComponents hi={'안녕하세요'} nai={99} />

          <MyComponentFunc irum={name} >
            <div>함수형 children</div>
          </MyComponentFunc>
      </div>
    );
}

export default App;
