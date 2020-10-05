import React from 'react'
// import Profile from './Profile'


const HandleName = (props) => {
    return (
        <div>
            <button onClick={() => props.alertMyInput ('Welcome Back ')}>
                Click here
            </button>
        </div>
    )
}

export default HandleName;
