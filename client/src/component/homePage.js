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
However, this is not a diagonostic screening tool for your current mental health condition. If this information makes you uncomfortable, please reach out to a mental health provider.
</p>
<p> We want to preempt sadness and depression before a person reaches a state in which they are conscious of their state. Research supports the connection between "sad" people listening to music, and furthermore that "happy" people do not listen to sad music (J. M. Van den Tol and Jane Edwards, 2011). Our metric for sad music is a combination of valence and arousal (Karl and Bulaj, 2016). These two dimensions classify songs into 4 areas: happy, sad, calm, angry. From Spotify's API, we gather the most recent 50 songs of each user, and averaged their valence and energy (equivalent of arousal). If they were in the bottom of both, then we classify them as a sad user.

For a sad user, we wanted to be careful in our communication and offer them agency. If they want to change their mood, they click a button for recommendations, and we recommend their taste in music but with a slightly higher valence and energy. Research shows that listening to sad music is not an effective strategy (Carlson et al. 2015), so we recommend happy songs.</p>
<p> https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5043262/</p>
<p> https://hmhyale2019.slack.com/messages/CGENCKC11/team/UG8RMSJBB/</p>
<p> https://journals.sagepub.com/doi/pdf/10.1177/0305735611430433</p>
<p> https://www.sciencedaily.com/releases/2015/10/151022094959.htm</p>
  </div>
<div className ="Login">
<Button><a href='http://54.161.108.81:8888' > Login to Spotify </a> </Button>
  </div>
<footer>
<p> https://devpost.com/software/spotify-mood-detector-nqcdlj/ </p>
  </footer>
  </div>



);
}
}
export default HomeContent;
