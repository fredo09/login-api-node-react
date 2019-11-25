import React from 'react';

const BoxLogin = (props) => {
    return(
        <div className="container Login-box">
            {props.children}
        </div>
    );
}

export default BoxLogin;