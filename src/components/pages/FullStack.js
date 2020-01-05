import React from 'react';
import { Link } from 'react-router-dom';

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


/* Import CSS Sheets */
import './FullStack.Style.css';

function FullStack() {
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
                            A full stack public facing e-commerce solution at scaled traffic demands. Dynamic order managment, product editing, e-commerce categories and user databases allowed a highly flexible website. Full administrator control panel to edit all aspects of both dynamic and static content displayed on the front end. Integrated into shipping fulfillment systems, quickbooks API accounting integration, credit card gateway(s) and realtime marketing tracking.
                        </div>
                        <div className="stackThumbnail"><img src={fullstack_stack_1} alt="Hardened Arms Thumbnail" /></div>
                        <div>&nbsp;</div>
                    </div>
                    <div></div>
                </div>
            </div>
            <div id='fullstack_contentContainer_two'>
                <div id="stack_content_LeftContainer">
                    <div></div>
                    <div id="stack_content_left">
                        <div>&nbsp;</div>
                        <div className="stackThumbnail"><img src={fullstack_stack_2} alt="Fireco Training Thumbnail" /></div>
                        <div id="stackText_2">
                            <div><span>FIRECO TRAINING</span></div>
                            Government compliant training solution for the Fire Fighting industry. Complete training program class builder, testing system and record keeping system. Secure testing enviroment with audit capabilities meeting government guidelines. Allowed for the managment of an entire fire department’s training curriculum from a single application accessabile to personnel both in class and at home. 
                        </div>
                        <div className="stack_rightAccent"><img src={fullstack_rightAccent} alt="Right Accent" /></div>
                        <div>&nbsp;</div>
                    </div>
                    <div></div>
                </div>
            </div>
            <div className='fullstack_contentContainer_one'>
                <div className="stack_content_rightContainer">
                    <div></div>
                    <div className="stack_content_right">
                        <div>&nbsp;</div>
                        <div className="stack_leftAccent"><img src={fullstack_leftAccent} alt="Left Accent" /></div>
                        <div className="stackText_1">
                            <div><span>MY PETS AND PEOPLE</span></div>
                            Custom social media platform centered around Pets and their owners. A full stack solution providing all the features of a classic social system, including profile management, friends lists, video uploads, picture uploads, status posts and user tagging. Complete with administrator management of users, static and dynamic content.
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