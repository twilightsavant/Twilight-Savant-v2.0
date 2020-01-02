import React from 'react';

/* Import Images */
import footer_logo from '../images/footer_logo.png';

/* Import Styles */
import './Footer.css';

function Footer() {
    return (
        <div id="footerDiv">
            <div id="footerDivCoverDiv">
                <img src={footer_logo} />
            </div>
        </div>
    )
}

export default Footer