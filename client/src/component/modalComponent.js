import React from 'react';
import { Component } from 'react';
import styles from './Nav.css';
import { BrowserRouter as Router, Route,Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom'






class Modal1 extends Component {
  render() {
    return (

<div className ="Modal1">
<h1> Your current valence value is:</h1>
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
export default Modal1;