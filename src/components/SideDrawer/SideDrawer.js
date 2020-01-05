import React from 'react';
import { Link } from 'react-router-dom';

/* Import Images */
import sideDrawer_logo from '../images/sideDrawer_logo.jpg';

/* Import CSS */
import './SideDrawer.css';
import Backdrop from '../Backdrop/Backdrop';

const SideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if(props.show) {
        drawerClasses = 'side-drawer open';
    }

   return (
    <nav className={drawerClasses}>
        <Link to="/"><img src={sideDrawer_logo} id="sideDrawer_logo"/></Link>
        <ul>
            <li><Link to="/" onClick={props.click}>Home</Link></li>
            <li><Link to="/FullStack" onClick={props.click}>Full Stack</Link></li>
            <li><Link to="/Design" onClick={props.click}>Design</Link></li>
            <li><Link to="/Resume" onClick={props.click}>Resume</Link></li>
        </ul>
    </nav> 
   );
}

export default SideDrawer;