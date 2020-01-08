import React from 'react';

const Error = ({ touched, message }) => {
    if(!touched) {
        return <span className="form-message valid">&nbsp;</span>
    }
    if(message) {
        return <span className="form-message invalid">{message}</span>
    }
    return <span className="form-message valid">&nbsp;</span>
};

export default Error;