import React from 'react';
import { Link } from 'react-router-dom';

/* Import Images */
import footer_logo from '../images/footer_logo.png';

/* Import Styles */
import './Footer.css';

function Footer() {
    return (
        <div id="footerDiv">
            <div id="footerDivCoverDiv">
                <img src={footer_logo} alt="Footer Logo" />
                <div>
                    <span className="footerLink"><Link to="/">Home</Link></span> |
                    <span className="footerLink"><Link to="/FullStack">Full Stack</Link></span> |
                    <span className="footerLink"><Link to="/Design">Design</Link></span> |
                    <span className="footerLink"><Link to="/Resume">Resume</Link></span> |
                    <span className="footerLink"><Link to="/Contact">Contact</Link></span>
                </div>
            </div>
        </div>
    )
}

export default Footer