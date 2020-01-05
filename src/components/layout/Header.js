import React from 'react';
import { Route, Link } from 'react-router-dom';
import d_logo from '../images/d_headerLogo.png';
import m_logo from '../images/m_headerLogo.png';
import m_navBtn from '../images/m_headerNavBtn.png';
import './Header.css';

function Header() {
    return (
        <header>
            <div id='d_headerCodeBG'>
                <div id='d_headerBG'>
                    <div id='d_headerLeftLinks'>
                        <Link to="/">Home</Link>
                        <Link to="/FullStack">Full Stack</Link>
                    </div>
                    <div id='d_headerRightLinks'>
                        <Link to="/Design">Design</Link>
                        <Link to="/Resume">Resume</Link>
                    </div>
                    <div id='d_headerLogo'><img src={d_logo} alt="Twilight Savant" /></div>
                </div>
                <div id='m_headerBG'>
                    <div id='m_headerNavBtn'>
                        <img src={m_navBtn} alt="Nav" id='m_header_navBtn'/>
                    </div>
                    <div id='m_headerLogo'><img src={m_logo} alt="Twilight Savant"/></div>
                </div>
            </div>
        </header>
    )
}

export default Header