import React from 'react';
import { Link } from 'react-router-dom';

/* Import Images */
import index_title_fullStack from '../images/index_title_fullStack.png';
import index_title_codingTechnologies from '../images/index_title_codingTechnologies.png';
import index_title_graphicDesign from '../images/index_title_graphicDesign.png';
import index_stackThumb1 from '../images/index_stackThumb1.jpg';
import index_stackThumb2 from '../images/index_stackThumb2.jpg';
import index_stackThumb3 from '../images/index_stackThumb3.jpg';
import index_stackThumb_leftAccent from '../images/index_stackThumb_leftAccent.png';
import index_stackThumb_rightAccent from '../images/index_stackThumb_rightAccent.png';
import index_codingLogos from '../images/index_codingLogos.png';

/* Import CSS Sheets */
import './Home.Style.css';

function Home() {
    return (
        <React.Fragment>
            <div id='contentContainer_one'>
                <div className="light_subHeading">FROM CONCEPT TO FINAL APPLICATION</div>
                <div><img src={index_title_fullStack}  alt="Full Stack Development" className="contentTitleImg"/></div>
                <div id='contentContainer_one_graphicFlex'>
                    <img src={index_stackThumb_leftAccent} className="d_accent_img" height="195px" alt=""/>
                    <img src={index_stackThumb1} className="index_stackThumb" alt="" width="239px"/>
                    <img src={index_stackThumb2} className="index_stackThumb" alt="" width="239px"/>
                    <img src={index_stackThumb3} className="index_stackThumb" alt="" width="239px"/>
                    <img src={index_stackThumb_rightAccent} className="d_accent_img" height="195px" alt=""/>
                </div>
                <div className="light_description">
                    Quisque sit amet nisl non quam placerat ullamcorper. In at urna consectetur, hendrerit turpis eget, feugiat ante. Mauris blandit arcu in sem blandit, nec placerat sem consequat...
                </div>
            </div>
            <div id='contentContainer_two'>
                <div id='contentContainer_two_BG'>
                    <div className="light_subHeading">PROGRESSIVE FRONT AND BACK END STACKS</div>
                    <div><img src={index_title_codingTechnologies}  alt="Coding Technologies" className="contentTitleImg"/></div>
                    <div><img src={index_codingLogos}  id="index_codingLogos" alt="Coding Logos"/></div>
                    <div className="light_description">
                        Quisque sit amet nisl non quam placerat ullamcorper. In at urna consectetur, hendrerit turpis eget, feugiat ante. Mauris blandit arcu in sem blandit, nec placerat sem consequat...
                    </div>
                </div>
            </div>
            <div id='contentContainer_three'>
                <div className="light_subHeading">ONLINE MARKETING & PRINT DESIGN</div>
                <div><img src={index_title_graphicDesign}  alt="Graphic Design"/></div>

            </div>
        </React.Fragment>
    )
}

export default Home;