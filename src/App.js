import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//import layout elements
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

//import the pages we want to display in our Routes
import Home from './components/pages/Home';
import FullStack from './components/pages/FullStack';
import Design from './components/pages/Design';
import Resume from './components/pages/Resume';


//Import style sheets
import './App.css';
import './components/layout/Header.css';



class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    console.log('clicked');
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  }

  render() {
    let backdrop;

    if(this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>;
    }

    return (
      <div className="App">
      <Router>
        <SideDrawer show={this.state.sideDrawerOpen} click={this.backdropClickHandler} />
        {backdrop}
        <Header drawerClickHandler={this.drawerToggleClickHandler} />
        <Route exact path="/" component={Home} />
        <Route path="/FullStack" component={FullStack} />
        <Route path="/Design" component={Design} />
        <Route path="/Resume" component={Resume} />
        <Footer />
      </Router>
      </div>
    );
  }
}

export default App;