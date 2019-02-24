import React, { Component } from 'react';
import {Heaer} from 'semantic-ui-css/semantic.min.css';
import { Header, Image, Button} from 'semantic-ui-react'





class HomeContent extends Component {

  render() {
    return (

      <div className= 'homepageContent'>
        <div className="homeFeature">

</div>
  <div>
    <Header as='h1'>Welcome to Moodify</Header>
    <p> "A simple way to change your mood" </p>
    <p> Moodify can help identify your current mood based on emotional sentiment from your Spotify history data. According to the result, we will give you opinions and personalized playlist to slightly boost your mood.

</p>

  </div>
<div className ="Login">
<Button><a href='http://54.161.108.81:8888' > Login to Spotify </a> </Button>
  </div>
<footer>
  </footer>
  </div>



);
}
}
export default HomeContent;
