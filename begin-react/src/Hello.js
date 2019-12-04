import React from 'react'

function HelloReact({ color, name, isSpecial }) {
    return (
        <div style={{
            color
        }}>
			{ /* 1 */}
            { isSpecial && <b>*</b> }
			{ /* 2 */}
            <b>{ isSpecial ? 'Spacial!!!' : 'not Spacial...' }</b>
            Hello React!!! {name}
        </div>
    )
}

HelloReact.defaultProps = {
    name: '이름없음'
}

export default HelloReact