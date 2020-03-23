import React, { useRef, useState, useMemo } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser'

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중...');

  // users배열에서 active가 true인 것만 filtering을 해서 얻은 배열의 길이를 리턴
  return users.filter(user => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });

  const { username, email } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      // name값을 value로 덮어쓴다.
      [name]: value
    });
  };

  // Component 상태로서 관리
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'alpha',
      email: 'alpha@naver.com', 
      active: true,
    },
    {
      id: 2,
      username: 'beta',
      email: 'beta@naver.com',
      active: false,
    },
    {
      id: 3,
      username: 'gamma',
      email: 'gamma@naver.com',
      active: false,
    } 
  ]);

  // useState로 관리해도 무방함
  // 리랜더링되는 값이 아니기때문에 변수로 관리하는 것도 괜찮다는 것을 보여줌
  const nextId = useRef(4);

  // 값이 바뀐다고해서 컴포넌트가 리랜더링이 될 이유가 없음

  // 배열의 변화
  // 기존의 배열에서 변화하는 것이 아닌 기존의 배열을 복사해서 구현하는 방식
  // push, splice, sort는 복사해서 사용하지 않는 한 가급적 사용하면 안된다

  const onCreate = () => {
    const user = {
      id: nextId.current,
      // username,
      // email
      ...inputs
    };
  
    // 1. spread를 사용해 진행
    // 여러개의 배열을 하나로 합칠 때 사용
    setUsers([...users, user]);

    // 2. concat을 사용해 진행
    // 기존의 배열을 복사해서 해당 위치에 넣은 다음, 새로운 배열을 만든 뒤 추가
    // Parameter에 배열이 아니어도 됨
    setUsers(users.concat(user));
    
    // input 내용물 제거
    setInputs({
      username: '',
      email: ''
    });

    nextId.current += 1;
  }

  // 요소를 삭제할 땐 불변성을 지키면서 진행해야함 -> filter함수 사용
  // 배열에서 특정 조건이 만족하는 원소들만 추출, 새로운 배열을 만들어줌
  const onRemove = id => {

    // 각 user 객체들을 확인하는데 Parameter와 다른 아이디만 보여지게 함
    setUsers(users.filter(user => user.id !== id));
    
  };

  // 요소를 수정할 때는 삭제할 때와 동일하게 불변성을 지키면서 진행해야함 -> map함수 사용
  const onToggle = id => {
    setUsers(users.map(
      user => user.id === id
        ? { ...user, active: !user.active } : user
    ));
  };

  // users가 바뀔 때만 호출하고 아니라면 이전의 값을 재사용함
  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser 
        username={username} 
        email={email}
        onChange={onChange}
        onCreate={onCreate}  
      />
      <UserList 
        users={users} 
        onRemove={onRemove} 
        onToggle={onToggle} 
      />
      <div>활성 사용자 수 : {count}</div>
    </>
  );
}

export default App;
