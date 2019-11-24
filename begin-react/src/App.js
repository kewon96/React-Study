import React from 'react';
import HelloReact from './Hello';

function App() {
  const name = 'react'
  return (
    <>
      <HelloReact />
      {/* 'name'이라는 문자열 그대로 출력됨 */}
      <div>name</div> 
      {/* 'react'라는 문자열값이 출력됨 */}
      <div>{name}</div>
    </>
  );
}

export default App;
