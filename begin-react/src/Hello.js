import React from 'react'

function HelloReact({color, name}) {
    return (
        <div style={{color}}>
            Hello React!!! {name}
        </div>
    )
}

HelloReact.defaultProps = {
    name: '이름없음'
}

export default HelloReact