import React from 'react';
import Plx from 'react-plx';

/* Get Components */
import ContactForm from './ContactForm';

/* Import Images */
import contact_contactTitle from '../images/contact_contactTitle.png';
import fullstack_leftAccent from '../images/fullstack_leftAccent.png';
import fullstack_rightAccent from '../images/fullstack_rightAccent.png';
import circuit_bg_bottom from '../images/circuit_BG_bottom.jpg';

/* Import Style */
import './Contact.Style.css';

//data for our parallax object
const parallaxData = [
    {
      start: 'self',
      duration: '100%',
      properties: [
        {
          startValue: 1,
          endValue: -30,
          property: 'translateY',
        },
      ],
    },
  ];

  const Contact = props => {
    return (
        <React.Fragment>
        <div className='contact_contentContainer'>
            <div className="light_subHeading">GET IN TOUCH</div>
            <p><img src={contact_contactTitle}  alt="Contact Graphic" className="contentTitleImg"/></p>
            <div id="contact_scrC">
                <div></div>
                <div id="contact_scr">
                    <div>&nbsp;</div>
                    <div className="contact_leftAccent"><img src={fullstack_leftAccent} alt="Left Accent" /></div>
                    <div className="contactText_1">
                        <ContactForm change={props.handleChange} handleSubmit={props.handleSubmit} />
                    </div>
                    <div className="contact_rightAccent"><img src={fullstack_rightAccent} alt="Right Accent" /></div>
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
        </React.Fragment>
    );
}

export default Contact;