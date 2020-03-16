import React, { useState } from 'react';

function InputSample2() {
    // useState에서는 여러개의 문자를 가진 객체형태를 관리해야함 
    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
    });
    const { name, nickname } = inputs;

    const onChange = (e) => {
        // 이벤트 발생시 e는 이벤트가 발생한 input의 정보가 나타난다.
        console.log(e.target.name);
        console.log(e.target.value);

        const { name, value } = e.target;

        // 기존의 객체 복사
        const nextInputs = {
            ...inputs, // spread 문법을 사용했으며 객체의 상속과 비슷한 방식이 배열에 사용됐다 생각하면 된다.
            [name] : value, // name이 무엇을 가리키냐에 따라 다른 key값이 변경됨
        };
        
        // 새로운 상태로 사용하겠다는 의미
        setInputs(nextInputs);

        // 18~23번 줄의 의미와 동일함
        // setInputs({
        //     ...inputs,
        //     [name] : value,
        // });
    }


    const onReset = () => {
        setInputs({
            name: '',
            nickname: '',
        });
    };

    return (
        <div>
            <input 
                name="name" 
                placeholder="Name" 
                onChange={onChange}
                value={name} 
            />
            <input 
                name="nickname" 
                placeholder="NickName" 
                onChange={onChange}
                value={nickname} 
            />
            
            <button onClick={onReset}>Reset</button>
            <div>
                <b>Value : </b>
                {name} ({nickname})
            </div>
        </div>
    );
}

export default InputSample2;

/**
 * 객체상테 업데이트
 * 기존의 상태 복사
 * 덮어씌우기
 * 새로운 상태에서 설정
 * 
 * 불변성을 지킨다
 * 상태가 업데이트 감지
 * 렌더링감지
 * 
 * 배열상태 관리
 * 지켜야 나중에 컴포넌트 업데아ㅣ트 성능 최적화가 가능하다.
 */