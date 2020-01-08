import React from 'react';
import Slideshow from './slideshow';
import Plx from 'react-plx';


/* Import Images */
import graphicdesign_graphicTitle from '../images/graphicdesign_graphicTitle.png';
import graphicdesign_commercialArtwork from '../images/graphicdesign_commercialArtwork.png';
import fullstack_leftAccent from '../images/fullstack_leftAccent.png';
import fullstack_rightAccent from '../images/fullstack_rightAccent.png';
import graphicdesign_adobe from '../images/graphicdesign_adobe.png';
import graphicdesign_adobecentered from '../images/graphicdesign_adobecentered.png';
import circuit_bg from '../images/circuit_BG.jpg';
import circuit_bg_bottom from '../images/circuit_BG_bottom.jpg';

/* Import CSS Styles */
import './Design.Style.css';

//data for our parallax object
const parallaxData = [
    {
      start: 'self',
      duration: '100%',
      properties: [
        {
          startValue: 1,
          endValue: -75,
          property: 'translateY',
        },
      ],
    },
  ];

function Design() {
    
    return (
        <React.Fragment>
            <div className='graphicdesign_contentContainer'>
                <div className="light_subHeading">PRINT & DIGITAL</div>
                <p><img src={graphicdesign_graphicTitle}  alt="Graphic Design" className="contentTitleImg"/></p>
                <div id="graphicdesign_scrC">
                    <div></div>
                    <div id="graphicdesign_scr">
                        <div>&nbsp;</div>
                        <div className="graphic_leftAccent"><img src={fullstack_leftAccent} alt="Left Accent" /></div>
                        
                            <img src={graphicdesign_adobe} alt="Adobe Suite Logos" id="graphicdesign_adobeLogosLeft" />
                            <img src={graphicdesign_adobecentered} alt="Adobe Suite Logos" id="graphicdesign_adobeLogosCenter" />
                        
                        <div className="graphicText_1_adobe">
                            <div><span>ADOBE SUITE EXPERIENCE</span></div>
                            With over 20 years of experience in all aspects of Adobe Suite, I am able to bring the power and flexibility of this industry cornerstone to your project. From graphic design, print collateral, video editing or post processing effects I am able to bring  Adobe’s powerful solutions to the table in the creation and fulfillment of your  project
                            <p>Photoshop | In Design  |  Illustrator  |  After Effects  |  Premier</p>
                        </div>
                        <div className="graphic_rightAccent"><img src={fullstack_rightAccent} alt="Right Accent" /></div>
                        <div>&nbsp;</div>
                    </div>
                    <div></div>
                </div>
            </div>
            <div className='circuit_bg'>
            <Plx
                className='circuitParallax'
                parallaxData={ parallaxData }
            >
                <img src={circuit_bg} className="circuit_img" alt="Circuit BG"/>
            </Plx>
            </div>
            <div className='graphicdesign_contentContainer'>
                <div className="light_subHeading">PRODUCTION ARTIST</div>
                <p><img src={graphicdesign_commercialArtwork}  alt="Commercial Artwork" className="contentTitleImg"/></p>
                
                <div className="gd_gall_top">
                    <div className="graphic_leftAccent"><img src={fullstack_leftAccent} alt="Left Accent" /></div>
                    <div className="gd_gall_container" >
                        <Slideshow />
                    </div>
                    <div className="graphic_rightAccent"><img src={fullstack_rightAccent} alt="Right Accent" /></div>
                </div>
                
                <div className="graphicText_flex">
                    <div className="graphicText_1">
                        <div><span>Web Design Artwork</span></div>
                        No building will stand the test of time without a solid foundation, just as a web application can not truly reach its potential without solid graphic design. From the single page display site to the largest of social platform undertakings, a consistent and pleasing design sets the tone for the user. I can help get the look correct before the coding begins and carry the UI and look and feel through to completion. 
                    </div>
                </div>

                <div className="gd_gall_top">
                    <div className="graphic_leftAccent"><img src={fullstack_leftAccent} alt="Left Accent" /></div>
                    <div className="gd_gall_container" >
                        <Slideshow />
                    </div>
                    <div className="graphic_rightAccent"><img src={fullstack_rightAccent} alt="Right Accent" /></div>
                </div>
                <div className="graphicText_flex">
                    <div className="graphicText_1">
                        <div><span>Print Design Artwork</span></div>
                        Camera ready artwork for physical media is essential to building a brand and a business. Print materials and marketing collateral created utilizing design elements from the projects’ web design and color palette help create a cohesive and consistent look and theme.  From business cards to brochures, postcards to billboards, I can deliver effective and visually pleasing materials in the format that the printer needs to complete the project.
                    </div>
                </div>
            </div>
            <div className='circuit_bg'>
            <Plx
                className='circuitParallax'
                parallaxData={ parallaxData }
            >
                <img src={circuit_bg_bottom} className="circuit_img" alt="Circuit BG" />
            </Plx>
            </div>
        </React.Fragment>
    )
}

export default Design;