import React from 'react';
import HelloReact from './Hello';
import Wrapper from './Wrapper';


function App() {
  return (
    <Wrapper>
      <HelloReact name="react" color="red" isSpecial={true} />
      <HelloReact color="pink" isSpecial />
      <HelloReact />
    </Wrapper>
  );
}

export default App;
