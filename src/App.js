import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//import layout elements
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

//import the pages we want to display in our Routes
import Home from './components/pages/Home';
import FullStack from './components/pages/FullStack';
import Design from './components/pages/Design';
import About from './components/pages/About';


import './App.css';
import './components/layout/Header.css';



class App extends Component {
  render() {
    return (
      <div className="App">
      
      <Router>    
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/FullStack" component={FullStack} />
        <Route path="/Design" component={Design} />

        <Route exact path="/blank" render={props => (
          <React.Fragment>
             
          </React.Fragment>
        ) } />
        <Route path='/about' component={About} />
        <Footer />
      </Router>
      </div>
    );
  }
}

export default App;