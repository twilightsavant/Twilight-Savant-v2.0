import React from 'react';
import { Link } from 'react-router-dom';
import Slideshow from './slideshow';


/* Import Images */
import graphicdesign_graphicTitle from '../images/graphicdesign_graphicTitle.png';
import graphicdesign_commercialArtwork from '../images/graphicdesign_commercialArtwork.png';
import fullstack_leftAccent from '../images/fullstack_leftAccent.png';
import fullstack_rightAccent from '../images/fullstack_rightAccent.png';
import graphicdesign_adobe from '../images/graphicdesign_adobe.png';
import graphicdesign_adobecentered from '../images/graphicdesign_adobecentered.png';

/* Import Videos */
import video1 from '../video/video1.mp4'


/* Import CSS Styles */
import './Design.Style.css';

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
                            The cornerstone of graphic design the Adobe suite provides the power and flexability required in today’s industry. From online design, print assets, video editing or post processing effects its where projects begin. With over 20 years experience in all aspects of the Adobe suite a solution can be found for your project.
                            <p>Photoshop | In Design  |  Illustrator  |  After Effects  |  Premier</p>
                        </div>
                        <div className="graphic_rightAccent"><img src={fullstack_rightAccent} alt="Right Accent" /></div>
                        <div>&nbsp;</div>
                    </div>
                    <div></div>
                </div>
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
                        The cornerstone of graphic design the Adobe suite provides the power and flexability required in today’s industry. From online design, print assets, video editing or post processing effects its where projects begin. With over 20 years experience in all aspects of the Adobe suite a solution can be found for your project.
                        <p>Photoshop | In Design  |  Illustrator  |  After Effects  |  Premier</p>
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
                        The cornerstone of graphic design the Adobe suite provides the power and flexability required in today’s industry. From online design, print assets, video editing or post processing effects its where projects begin. With over 20 years experience in all aspects of the Adobe suite a solution can be found for your project.
                        <p>Photoshop | In Design  |  Illustrator  |  After Effects  |  Premier</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Design;