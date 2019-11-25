import React from 'react';
import HelloReact from './Hello';
import Wrapper from './Wrapper';


function App() {
  return (
    <Wrapper>
      <HelloReact name="react" color="red" />
      <HelloReact color="pink" />
      <HelloReact />
    </Wrapper>
  );
}

export default App;
