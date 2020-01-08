import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

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
import Contact from './components/pages/Contact';

//Import style sheets
import './App.css';
import './components/layout/Header.css';


class App extends Component {
  constructor() {
    super()

    this.state = {
      sideDrawerOpen: false,
      name: '',
      company: '',
      phone: '',
      email: '',
      message: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //toggle the mobile navigation bar with a click
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  //make the backdrop go away with a click
  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  }

  //update the form from the contact page
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  async handleSubmit(e) {
    e.preventDefault(); //block refresh
    const { name, company, phone, email, message } = this.state;
    console.log("Boom Submit");

    const form = await axios.post('/api/form', {
      name, 
      company,
      phone,
      email,
      message
    })

    //clear out form
    this.setState( {
      name: '',
      company: '',
      phone: '',
      email: '',
      message: ''
    })
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
        <Route path="/Contact"> 
          <Contact handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        </Route>
        <Footer />
      </Router>
      </div>
    );
  }
}

export default App;