import React from 'react';

function User({ user }) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    );
}

function UserList({ users }) {
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
                    user => (<User user={user} key={user.id} />)
                    // 없을 땐 map의 두 번째 Parameter인 index를 사용한다.
                    // 웬만해선 key에 index넣는 것을 피해야한다.
                    // (user, index) => (<User user={user} key={index} />)
                )
            }
        </div>
    );
}

export default UserList;