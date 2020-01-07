import React from 'react';
import { Link } from 'react-router-dom';
import Plx from 'react-plx';

/* Import Images */
import d_logo from '../images/d_headerLogo.png';
import m_logo from '../images/m_headerLogo.png';
import m_navBtn from '../images/m_headerNavBtn.png';
import streaks from '../video/streaks.mp4';

/* Import Styles */
import './Header.css';

const parallaxData = [
    {
      start: 'self',
      duration: '100%',
      properties: [
        {
          startValue: 1,
          endValue: -150,
          property: 'translateY',
        },
      ],
    },
  ];

  const m_parallaxData = [
    {
      start: 'self',
      duration: '100%',
      properties: [
        {
          startValue: 1,
          endValue: -100,
          property: 'translateY',
        },
      ],
    },
  ];
  
//<img src={d_headerCodeBG} className="d_bg_img" />

const Header = props => (  
        <header>
            <div id='d_headerCodeBG'>
                <div id='d_div_Parallax'>
                <Plx
                    className='d_Parallax'
                    parallaxData={ parallaxData }
                >
                    <video  width="100%" autoPlay loop>
                        <source src={streaks} type="video/mp4" />
                    </video>
                </Plx>
                </div>
                <div id='d_headerBG'>
                    <div id='d_headerLeftLinks'>
                        <Link to="/FullStack">Full Stack</Link>
                        <Link to="/Design">Design</Link>
                    </div>
                    <div id='d_headerRightLinks'>
                      <Link to="/Resume">Resume</Link>
                      <Link to="/Contact">Contact</Link>
                    </div>
                    <div id='d_headerLogo'><Link to="/"><img src={d_logo} alt="Twilight Savant" /></Link></div>
                </div>
                <div id='m_div_Parallax'>
                <Plx
                    className='m_Parallax'
                    parallaxData={ m_parallaxData }
                >
                    <video width="100%"  autoPlay loop>
                        <source src={streaks} type="video/mp4" />
                    </video>
                </Plx>
                </div>
                <div id='m_headerBG'>
                    <div id='m_headerNavBtn'>
                        <img src={m_navBtn} alt="Nav" id='m_header_navBtn' onClick={props.drawerClickHandler}/>
                    </div>
                    <div id='m_headerLogo'><Link to="/"><img src={m_logo} alt="Twilight Savant"/></Link></div>
                </div>
            </div>
        </header>
);

export default Header