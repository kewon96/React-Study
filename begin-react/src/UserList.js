import React, { useEffect } from 'react';

function User({ user, onRemove, onToggle }) {
    const { id, username, email, active } = user;
    // // mount / numount 
    // useEffect(() => {
    //     // 컴포넌트가 mount될 때 주로 추가하는 작업
    //     // props로 받은 값을 컴포넌트의 state로 설정
    //     // 외부 api요청
    //     // D3, Video.js 등 외부 라이브러리 사용
    //     // setInterval, setTimeout
    //     console.log('컴포넌트가 화면에 나타남');

    //     // 컴포넌트가 사라질 때 실행(unmount) === Cleaner
    //     return () => {
    //         // setInterval, setTimeout 사용해서 등록했던 작업을 제거할 때(clearInterval, clearTimeout)
    //         // 라이브러리 인스턴스 제거
    //         console.log('컴포넌트가 화면에서 사라짐');
    //     }
    // }, []); // 의존되는 값을 배열 안에 넣음, 값이 비어있으면 컴포넌트가 화면에 처음 나타날 때만 실행

    useEffect(() => {
        console.log('user값이 설정됨!')
        console.log(user);

        return () => {
            console.log('user값이 바뀌기 전!');
            console.log(user)
        }
    }, [user]); // 바뀔 때도 나타남
    // // 배열 값을 넣어야 최신의 값을 얻을 수 있다.

    // 해당 userEffect는 어떤 활동을 하건 모든 컴포넌트에서 실행된다.
    // 이유는 부모컴포넌트가 리랜더링되면 자식컴포넌트 또한 리랜더링이 진행되는데
    // User컴포넌트의 부모컴포넌트는 UserList인데 UserList에서 users배열이 바뀌게 된다면
    // UserList가 리랜더링이 되고 자연스레 User컴포넌트도 리랜더링이 되기 때문이다.
    // 브라우저상에는 원하는 항목만 이벤트가 작동하는 것을 볼 수 있지만
    // DOM상에서는 모든 내용을 랜더링, 비교 후 바뀐 부분만 적용
    // 지금은 느려지거나 하진 않지만 추후 데이터가 많아진다면 Virtual DOM에서의 리소스조차 아껴야하는 상황이 발생할 수 있다. => 컴포넌트 리랜더링 최적화
    // useEffect(() => {
    //     console.log(user);
    // });


    return (
        <div>
            <b 
                style={{
                    color: active ? 'green' : 'black',
                    cursor: 'pointer'
                }}
                onClick={() => onToggle(id)}
            >
                {username}
            </b> 
            <span>({email})</span> 
            {/* 삭제이벤트 작동 시 해당 함수의 id값을 Parameter값을 넣어서 호출 */}
            <button onClick={() => onRemove(id)}>Delete</button>
        </div>
    );
}

function UserList({ users, onRemove, onToggle }) {
    // 1. 배열을 하나하나 Rendering하는 방식
    // return (
    //     <div>
    //         <div>
    //             <b>{users[0].username}</b> <span>({users[0].email})</span>
    //         </div>
    //         <div>
    //             <b>{users[1].username}</b> <span>({users[1].email})</span>
    //         </div>
    //         <div>
    //             <b>{users[2].username}</b> <span>({users[2].email})</span>
    //         </div>
    //     </div>
    // );

    // 2. 컴포넌트 하나 생성(하나의 컴포넌트파일에 두개의 컴포넌트를 만듬)
    // 배열이 유동적일 때는 대처할 수 없음
    // return (
    //     <div>
    //         <User user={users[0]} />
    //         <User user={users[1]} />
    //         <User user={users[2]} />
    //     </div>
    // );

    // 3. map function
    // 기존의 배열의 가공을 쉽게 해주는 함수
    // index.js:1406 Warning: Each child in a list should have a unique "key" prop. 
    // 각 요소에는 key라는 prop이 있어야한다는 경고( -> key설정을 안하면 발생하는 경고 )
    // 각 원소에 고유값을 줘서 렌더링성능을 최적화하게 해줌
    return (
        <div>
            {
                users.map(
                    user => (
                        <User 
                            user={user} 
                            key={user.id} 
                            onRemove={onRemove} 
                            onToggle={onToggle}
                        />)
                    // 없을 땐 map의 두 번째 Parameter인 index를 사용한다.
                    // 웬만해선 key에 index넣는 것을 피해야한다.
                    // (user, index) => (<User user={user} key={index} />)
                )
            }
        </div>
    );
}

export default UserList;