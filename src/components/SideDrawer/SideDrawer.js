import React from 'react';
import { Link } from 'react-router-dom';

/* Import Images */
import sideDrawer_logo from '../images/sideDrawer_logo.jpg';

/* Import CSS */
import './SideDrawer.css';

const SideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if(props.show) {
        drawerClasses = 'side-drawer open';
    }

   return (
    <nav className={drawerClasses}>
        <Link to="/" onClick={props.click}><img src={sideDrawer_logo} id="sideDrawer_logo" alt="Side Drawer Logo" /></Link>
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