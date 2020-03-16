import React, { useState } from 'react';

function InputSample1() {
    const [text, setText] = useState('');
    const onChange = (e) => {
        // e : 이벤트에 대한 내용
        // e.target : 이벤트가 발생하는 DOM
        // e.target.value : 이벤트가 발생하는 DOM의 값
        setText(e.target.value); 
    }

    const onReset = () => {
        setText('');
    };

    return (
        <div>
            {/* value={text}를 넣지 않는다면 reset버튼 동작 후에도 input에는 값이 남게된다. */}
            <input onChange={onChange} value={text} />
            <button onClick={onReset}>Reset</button>
            <div>
                <b>Value : </b>
                {text}
                <div></div>
            </div>
        </div>
    );
}

export default InputSample1;