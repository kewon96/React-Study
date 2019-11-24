import React from 'react';
import HelloReact from './Hello';
import './App.css';

function App() {
  const name = 'react'
  const style = {
    // camelCase
    backgroundColor: 'black',
    color: 'aqua',
    // 기본단위는 px
    fontSize: 24,
    // 그 외의 단위는 ''를 통해 문자열로 변환시켜야한다.
    padding: '1rem',
  }
  return (
    <>
      <HelloReact />
      {/* 'name'이라는 문자열 그대로 출력됨 */}
      <div>name</div> 
      {/* 'react'라는 문자열값이 출력됨 */}
      <div style={style}>{name}</div>
      {/* 이렇게해도 작동은 되지만 콘솔창에서는 에러가 난다. */}
      <div className="gray-box"></div>
    </>
  );
}

export default App;
