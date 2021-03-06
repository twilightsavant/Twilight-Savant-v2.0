import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';

import './slideshow.style.css'

import webSlide_1 from '../images/webSlide_1.jpg';
import webSlide_2 from '../images/webSlide_2.jpg';
import webSlide_3 from '../images/webSlide_3.jpg';
import webSlide_4 from '../images/webSlide_4.jpg';
import webSlide_5 from '../images/webSlide_5.jpg';

const properties = {
  duration: 3000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: false,
  autoplay: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}

class slideshow extends Component {
  render() {
    return (
      <div className="slide-container">
          <Slide {...properties}>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${webSlide_1})`}}>
              </div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${webSlide_2})`}}>
              </div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${webSlide_3})`}}>
              </div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${webSlide_4})`}}>
              </div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${webSlide_5})`}}>
              </div>
            </div>
        </Slide>
      </div>
    )
  }
}

export default slideshow;