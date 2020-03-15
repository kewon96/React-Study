import React, { useState } from "react";

function Counter() {
    // number : h1에 보여질 값
    // setNumber : 현재 상태를 업데이트하는 함수
    const [number, setNumber] = useState(0); // 배열 비구조할당 / 구조분해, h1의 기본값은 useState의 parameter에 넣어주면 됨
    const onIncrease = () => {
        // setNumber(number + 1);
        setNumber(prevNumber => prevNumber + 1); // 어떻게 업데이트를 할 것인가 -> 업데이트 함수 최적화와 관계있음
    }

    const onDecrease = () => {
        setNumber(number - 1);
    }

    return ( 
        <div>
            <h1>{number}</h1>
            {/* 함수를 넣는 것이지 호출하면 안된다. */}
            <button onClick={onIncrease}>+1</button> 
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default Counter;