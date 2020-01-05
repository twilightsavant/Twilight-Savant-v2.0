import React from 'react';

/* Import CSS */
import './Backdrop.css'

const Backdrop = props => (
    <div className="backdrop" onClick={props.click} />
);

export default Backdrop;