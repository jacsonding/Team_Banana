import React from 'react';
import { Component } from 'react';
import styles from './Nav.css';
import { BrowserRouter as Router, Route,Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom'






class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
<Router>
<nav>
    <div className="navLinks">
    <ul>
    <li><NavLink exact to ="/introPage">Home</NavLink></li>
    <li><a href ="http://localhost:8888">Spotify</a> </li>
    <li><NavLink exact to ="/about" onClick={() => window.location.refresh()}>About</NavLink></li>
    <li><NavLink exact to ="/about2" onClick={() => window.location.refresh()}>About2</NavLink></li>

  </ul>
  </div>
  </nav>
	
  </Router>
  <Route exact path="/about" component={About} />
    <Route exact path="/about2" component={About} />



      </div>
	  
    );
  }
}
class About extends React.Component {
    render() {
        return <h1>The Team</h1>;
		alert("you have been routed");
    }
}

class About2 extends React.Component {
    render() {
        return <h1>About 2 page</h1>;
		alert("you have been routed");
    }
}
export default Navbar;