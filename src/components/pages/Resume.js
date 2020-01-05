import React from 'react';
import Plx from 'react-plx';

/* Import Images */
import fullstack_leftAccent from '../images/fullstack_leftAccent.png';
import fullstack_rightAccent from '../images/fullstack_rightAccent.png';
import resume_pic from '../images/resume_pic.png';
import resume_title from '../images/resume_title.png';
import circuit_bg_bottom from '../images/circuit_BG_bottom.jpg';

/* Import Style */
import './Resume.style.css';

//data for our parallax object
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

function Resume() {
    return(
        <React.Fragment>
            <div className='resume_contentContainer'>
                <div className="light_subHeading">PROFESSIONAL</div>
                <p><img src={resume_title}  alt="Resume Title" className="contentTitleImg"/></p>
                <div id="resume_scrC">
                    <div></div>
                    <div id="resume_scr">
                        <div>&nbsp;</div>
                        <div className="graphic_leftAccent"><img src={fullstack_leftAccent} alt="Left Accent" /></div>
                        
                            <img src={resume_pic} alt="Pic" id="resume_pic" />
                        
                        <div className="resumeText_1">
                            <div><span>PATRICK MERLINO</span></div>
                            I have a been a programmer, consultant and business owner since the mid 90s. A diverse knowledge of programming languages and their strengths on the web means applications can be completed effectiently and professionaly.

                            <p>My experience building multi-million dollar e-commerce stores from the ground up ensures best practices are implemented and sales funnels are optimized. I am enjoy working with a team as a full stack programmer helping companies realize their application goals.</p>

                        </div>
                        <div className="graphic_rightAccent"><img src={fullstack_rightAccent} alt="Right Accent" /></div>
                        <div>&nbsp;</div>
                    </div>
                    <div></div>
                </div>
                <div id="resume_flexBox">
                <div className="resume_flex">
                        <div><span>SKILLS</span></div>
                        <ul>
                            <li>E-Commerce Preograming</li>
                            <li>Custom Front & Back end systems</li>
                            <li>CMS development</li>
                            <li>API integrations</li>
                            <li>Credit Card Gateway Programming</li>
                            <li>Graphic Design (Print & Digital)</li>
                            <li>Database Administration</li>
                            <li>UI Funnel Optimization</li>
                            <li>E-mail based marketing for results</li>
                            <li>Full stack programming</li>
                            <li>Video Editing / Production</li>
                            <li>Commercial Photography</li>
                            <li>Prototyping / CNC / Manual Machining</li>
                            <li>Production Drawings / Prints</li>
                            <li>3D Design, Modelling & Animation</li>
                        </ul>
                    </div>
                    <div className="resume_flex">
                        <div><span>LANGUAGES</span></div>
                        <ul>
                            <li>PHP</li>
                            <li>SQL/mySQL</li>
                            <li>HTML5</li>
                            <li>Javascript</li>
                            <li>AJAX/JSON</li>
                            <li>C#/.NET</li>
                            <li>JAVA</li>
                            <li>C++</li>
                            <li>CSS</li>
                            <li>node.JS/Express</li>
                            <li>MongoDB</li>
                            <li>Hogan/JSX</li>
                            <li>React</li>
                            <li>RestAPIs</li>
                            <li>G-Code</li>
                        </ul>
                    </div>
                    <div className="resume_flex">
                        <div><span>PROGRAMS</span></div>
                        <ul>
                            <li>Adobe Photoshop, Illustrator</li>
                            <li>Adobe Premier/After Effects</li>
                            <li>Adobe InDesign</li>
                            <li>Microsoft Office Suite</li>
                            <li>Maya / Softimage / Rhino</li>
                            <li>Visual Studio/Code</li>
                            <li>Git, AWS, Server Administration</li>
                            <li>Multiple programming IDEs</li>
                            <li>AWS / Digital Ocean</li>
                            <li>Fusion360</li>
                            <li>FeatureCam</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='circuit_bg'>
            <Plx
                className='circuitParallax'
                parallaxData={ parallaxData }
            >
                <img src={circuit_bg_bottom} className="circuit_img" />
            </Plx>
            </div>
        </React.Fragment>
    )
}
export default Resume;