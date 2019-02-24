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
    <Header as='h1'>First Header</Header>
    <p> "This app does this" </p>
    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis aliquam nunc. Integer at sem dapibus, fermentum nibh a, sollicitudin massa. Suspendisse nec ultrices nibh. Praesent laoreet magna quam, sed posuere elit scelerisque id. Fusce porttitor enim quis sapien varius, quis vehicula urna blandit. Morbi id metus leo. Cras egestas eu turpis sed lacinia. Etiam non scelerisque elit. Nunc est est, mollis ut faucibus non, pellentesque non nisi. Etiam eu finibus nunc. Maecenas gravida scelerisque ex, id vehicula ante vestibulum ullamcorper. Sed gravida feugiat pharetra. Integer ultrices tristique lorem, eget congue lorem. Integer iaculis, sem non faucibus tincidunt, urna ante hendrerit neque, sit amet euismod sem tortor posuere orci. Suspendisse accumsan eros a felis egestas, sit amet dapibus leo accumsan.

</p>

<Image src='/images/wireframe/image.png' size='large' />
  </div>
<div className ="Login">
<Button><a href='http://54.161.108.81/test' > Login to Spotify </a> </Button>
  </div>
<footer>Sure
  </footer>
  </div>



);
}
}
export default HomeContent;
