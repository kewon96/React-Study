import React from 'react'

function CreateUser({ username, email, onChange, onCreate }) {
    console.log('CreateUser Rendering');
    
    return (
        <div>
            <input 
                name="username" 
                placeholder="username" 
                onChange={onChange} 
                value={username} 
            />
            <input
                name="email" 
                placeholder="email" 
                onChange={onChange} 
                value={email} 
            />
            <button onClick={onCreate}>Add User</button>
        </div>
    );
}

export default React.memo(CreateUser);