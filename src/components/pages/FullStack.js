import React from 'react';
import Plx from 'react-plx';

/* Import Images */
import fullstack_recentTitle from '../images/fullstack_recentTitle.png';
import fullstack_stack_1 from '../images/fullstack_stack_1.png';
import fullstack_stack_2 from '../images/fullstack_stack_2.png';
import fullstack_stack_3 from '../images/fullstack_stack_3.png';
import fullstack_leftAccent from '../images/fullstack_leftAccent.png';
import fullstack_rightAccent from '../images/fullstack_rightAccent.png';
import fullstack_galleryTitle from '../images/fullstack_galleryTitle.png';
import fullstack_img1 from '../images/fullstack_gallery/img1.jpg';
import fullstack_img2 from '../images/fullstack_gallery/img2.jpg';
import fullstack_img3 from '../images/fullstack_gallery/img3.jpg';
import fullstack_img4 from '../images/fullstack_gallery/img4.jpg';
import fullstack_img5 from '../images/fullstack_gallery/img5.jpg';
import fullstack_img6 from '../images/fullstack_gallery/img6.jpg';
import fullstack_img7 from '../images/fullstack_gallery/img7.jpg';
import fullstack_img8 from '../images/fullstack_gallery/img8.jpg';
import fullstack_img9 from '../images/fullstack_gallery/img9.jpg';
import fullstack_img10 from '../images/fullstack_gallery/img10.jpg';
import fullstack_img11 from '../images/fullstack_gallery/img11.jpg';
import fullstack_img12 from '../images/fullstack_gallery/img12.jpg';
import fullstack_galleryShadow from '../images/fullstack_galleryShadow.png';
import circuit_bg from '../images/circuit_BG.jpg';
import circuit_bg_bottom from '../images/circuit_BG_bottom.jpg';


/* Import CSS Sheets */
import './FullStack.Style.css';

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

function FullStack() {
    //<div className="circuit_bg"><img src={circuit_bg} className="circuit_parallax" /></div>
   
    return (
        <React.Fragment>
            <div className='fullstack_contentContainer_one'>
                <div className="light_subHeading">COMPLETE CONCEPT TO STACK SOLUTIONS</div>
                <p><img src={fullstack_recentTitle}  alt="Recent Fullstack Websites" className="contentTitleImg"/></p>
                <div className="stack_content_rightContainer">
                    <div></div>
                    <div className="stack_content_right">
                        <div>&nbsp;</div>
                        <div className="stack_leftAccent"><img src={fullstack_leftAccent} alt="Left Accent" /></div>
                        <div className="stackText_1">
                            <div><span>HARDENED ARMS</span></div>
                            A full stack, public facing, e-commerce solution website built with full scale-ability and the ability to handle all traffic demands. High volume e-commerce solution and user database featuring thousands of products. Featuring full administrator editing of dynamic and static front end content. Back end integration into shipping fulfillment systems, quick books accounting API, credit card gateway and real-time marketing and performance tracking.
                        </div>
                        <div className="stackThumbnail"><img src={fullstack_stack_1} alt="Hardened Arms Thumbnail" /></div>
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
                <img src={circuit_bg} className="circuit_img" alt="Circuit BG" />
            </Plx>
            </div>
            <div id='fullstack_contentContainer_two'>
                <div id="stack_content_LeftContainer">
                    <div></div>
                    <div id="stack_content_left">
                        <div>&nbsp;</div>
                        <div className="stackThumbnail"><img src={fullstack_stack_2} alt="Fireco Training Thumbnail" /></div>
                        <div id="stackText_2">
                            <div><span>FIRECO TRAINING</span></div>
                            A Government compliant training solution developed for the Fire Fighting industry. Incorporating a training curriculum builder and test builder. Features included auto grading, provisions for essay question w/teacher grading, practice tests and timed formal testing. Department, station house and individual training tracking and record keeping system integration. This program featured a secure testing environment with audit capabilities, fully compliant with stringent government guidelines for fire personnel. This app allowed for the management of fire department written curriculum, onsite and offsite training events and record keeping and training deadline reminders. All Department members are able to complete curriculum from in station classes or online from home.
                        </div>
                        <div className="stack_rightAccent"><img src={fullstack_rightAccent} alt="Right Accent" /></div>
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
                <img src={circuit_bg_bottom} className="circuit_img" alt="Circuit BG" />
            </Plx>
            </div>
            <div className='fullstack_contentContainer_one'>
                <div className="stack_content_rightContainer">
                    <div></div>
                    <div className="stack_content_right">
                        <div>&nbsp;</div>
                        <div className="stack_leftAccent"><img src={fullstack_leftAccent} alt="Left Accent" /></div>
                        <div className="stackText_1">
                            <div><span>MY PETS AND PEOPLE</span></div>
                            A custom social media portal centered around pets and their owners. A full stack solution providing all the features of a classic social system, including profile management, friends lists, video uploads, picture uploads, status posts, user tagging, ad serving and dog treat purchase revenue models. The site contained complete tools for admin management of users, static and dynamic content.
                        </div>
                        <div className="stackThumbnail"><img src={fullstack_stack_3} alt="My Pets and People Thumbnail" /></div>
                        <div>&nbsp;</div>
                    </div>
                    <div></div>
                </div>
            </div>
            <div id="fullstack_contentBlock" >
                <div id="fullstack_galleryContainer_bg" >
                    <div className="light_subHeading">CUSTOM CONTENT MANAGEMENT DRIVEN</div>
                    <p><img src={fullstack_galleryTitle}  alt="Small Business Websites" className="contentTitleImg"/></p>
                    <div id="stack_galleryDesc"><div id='stack_galleryTxt' className="light_description">Custom written content managmeent system allowing the rapid deployment and administrators management of all website content. Implemeneted on hundreds of small business websites utilizing a LAMP stack.</div></div>
                    <div id='fullstack_galleryContainer'>
                        <div></div>
                        <div id="fullstack_galleryDiv">
                            <img src={fullstack_img1} alt=""/>
                            <img src={fullstack_img2} alt="" />
                            <img src={fullstack_img3} alt="" />
                            <img src={fullstack_img4} alt="" />
                            <img src={fullstack_img5} alt="" />
                            <img src={fullstack_img6} alt="" />
                            <img src={fullstack_img7} alt="" />
                            <img src={fullstack_img8} alt="" />
                            <img src={fullstack_img9} alt="" />
                            <img src={fullstack_img10} alt="" />
                            <img src={fullstack_img11} alt="" />
                            <img src={fullstack_img12} alt="" />
                        </div>
                        <div></div>
                    </div>
                    <div id="fullstack_galleryShadow">
                        <img src={fullstack_galleryShadow} alt="Gallery Shadow" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default FullStack;