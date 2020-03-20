import React, { useRef } from 'react';
import UserList from './UserList';


function App() {
  const users = [
    {
      id: 1,
      username: 'alpha',
      email: 'alpha@naver.com'
    },
    {
      id: 2,
      username: 'beta',
      email: 'beta@naver.com'
    },
    {
      id: 3,
      username: 'gamma',
      email: 'gamma@naver.com'
    } 
  ];

  // useState로 관리해도 무방함
  // 리랜더링되는 값이 아니기때문에 변수로 관리하는 것도 괜찮다는 것을 보여줌
  const nextId = useRef(1);

  // 값이 바뀐다고해서 컴포넌트가 리랜더링이 될 이유가 없음

  const onCreate = () => {
    nextId.current += 1;
  }

  return (
    <UserList users={users} />
  );
}

export default App;
