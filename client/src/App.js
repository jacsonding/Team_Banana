import React, { Component } from "react";
import Navbar from "./component/Nav.js";
import HomeContent from "./component/homePage.js";
import { Button } from "semantic-ui-react";
import { NavLink } from 'react-router-dom'
import "./App.css";
import SpotifyWebApi from "spotify-web-api-js";
const spotifyApi = new SpotifyWebApi();
//const AWS = require('aws-sdk/dist/aws-sdk-react-native');


// Configure Spotify
var tempBuffer = [];
var bufferStr = "";
var playlisfromSpot = [];

var DeleteArr = [];
var DeleteArr2 = [];
var sum = 0;


var myData = {
  userData: [],

  mathData: [
    {
      avgGloom: "",
      avgSent: "",
      avgValence: "",
      linearGloom: "",
      linearHappy: "",
      uri: "",
      linearSad: ""

    }
  ]
};
class App extends Component {
  constructor() {
    super();
    const params = this.getHashParams();
    const token = params.access_token;
    if (token) {
      spotifyApi.setAccessToken(token);
    }
    this.state = {
      loggedIn: token ? true : false,
      nowPlaying: { name: "Not Checked", albumArt: "" }
    };
  }
  getHashParams() {
    var hashParams = {};
    var e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    e = r.exec(q);
    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
    }
    return hashParams;
  }

  


    // Get top 50 recently played songname,trackid, etc... See how you compare to the average
  getTrack() {
	
	  
    spotifyApi.getMyRecentlyPlayedTracks({limit: 50})
      .then(response => { 
	  
	  console.log(response)
	  
	  
        // Log Check console.log(response.items[0].track.name);
        //  Create Data Structure for UserData
		
		
        for (var i = 0; i < 49; i++) {
          if (tempBuffer.length != 49) {
            myData.userData.push({
              songName: " ",
              trackID: "",
              spotValence: "",
              artistName: "",
              uri:"",
              lyrics: "",
              lyrSent: "",
              gloomIndex: ""
            });
            myData.userData[i].songName = response.items[i].track.name; // Song Name
            myData.userData[i].trackID = response.items[i].track.id; // Track ID
                       myData.userData[i].uri = response.items[i].track.uri; // Song Name
                      // playlisfromSpot[i].uri = response.items[i].track.uri
                       playlisfromSpot.push(response.items[i].track.uri);

            myData.userData[i].artistName = response.items[i].track.artists[0].name; // Artist Name
          }
        }
        // Temp Buffer Array for Audio
        for (var i = 0; i < 49; i++) {
          if (tempBuffer.length != 49) {
            tempBuffer.push(myData.userData[i].trackID);
          // tempBuffer.push(myData.userData[i].uri);


          }
        }
       
        // Get Audio Features
        spotifyApi.getAudioFeaturesForTracks(tempBuffer).then(response => {
          console.log(response);
          console.log(myData);
          for (var i = 0; i < 49; i++) {
            if (response.audio_features[i] === null) {
              myData.userData[i].spotValence = "Missing";
            } else {
              myData.userData[i].spotValence = response.audio_features[i].valence;
            }
          }
          
          // Quick test to check valence and get average
          for (var i=0;i<49;i++){
          
            console.log(myData.userData[i].spotValence);
            if (myData.userData[i].spotValence !== "Missing"){
             sum += parseFloat(myData.userData[i].spotValence);
            }
  }
   console.log("The sum is" +sum/50);
   // delete me 
        });

      });
  }
  // See How you compare to the group
  getTrackGroup() {
	
	  
    spotifyApi.getMyRecentlyPlayedTracks({limit: 50})
      .then(response => { 
	  
	  console.log(response)
	  
	  /*
        // Log Check console.log(response.items[0].track.name);
        //  Create Data Structure for UserData
		
		
        for (var i = 0; i < 40; i++) {
          if (tempBuffer.length != 40) {
            myData.userData.push({
              songName: " ",
              trackID: "",
              spotValence: "",
              artistName: "",
              lyrics: "",
              lyrSent: "",
              gloomIndex: ""
            });
            myData.userData[i].songName = response.items[i].track.name; // Song Name
            myData.userData[i].trackID = response.items[i].track.id; // Track ID
            myData.userData[i].artistName = response.items[i].track.artists[0].name; // Artist Name
          }
        }
        // Temp Buffer Array for Audio
        for (var i = 0; i < 40; i++) {
          if (tempBuffer.length != 40) {
            tempBuffer.push(myData.userData[i].trackID);
          }
        }
       
        // Get Audio Features
        spotifyApi.getAudioFeaturesForTracks(tempBuffer).then(response => {
          console.log(response);
          console.log(myData);
          for (var i = 0; i < 40; i++) {
            if (response.audio_features[i] === null) {
              myData.userData[i].spotValence = "Missing";
            } else {
              myData.userData[i].spotValence = response.audio_features[i].valence;
            }
          }
          
          // Quick test to check valence and get average
          for (var i=0;i<40;i++){
          
            console.log(myData.userData[i].spotValence);
            if (myData.userData[i].spotValence !== "Missing"){
             sum += parseFloat(myData.userData[i].spotValence);
            }
  }
   console.log("The sum is" +sum/40);
   // delete me 
        });

     */ });
  
  
  }
  

  getSpotifyPlay(){
    console.log("Get spotify ");

    spotifyApi.getRecommendations({})
    .then(response =>{ 
      console.log(response);

      });
  }
  
/* Delete me after use */
  getPlaylistVal() {
	
	  
    spotifyApi.getMyRecentlyPlayedTracks({limit: 50})
      .then(response => { 
	  
	  console.log(response)
	 });
  
  spotifyApi.getPlaylistTracks('Spotify','5nPXGgfCxfRpJHGRY4sovK').then(response =>{
  for (var i=0;i<99;i++){
    //console.log(response.items[i].track.id)
    DeleteArr.push(response.items[i].track.id)
  }
  spotifyApi.getAudioFeaturesForTracks(DeleteArr).then(response => {
    for (var i=0;i<99;i++){
      DeleteArr2[i] = response.audio_features[i].valence;
    }
    console.log(response);
    
  });  
});
  
  console.log(DeleteArr);
  console.log(DeleteArr2);
  
  
}
        conditionalRendering(){
          // let mountNode = React.findDOMNode(this.refs.wassup);
   //  let unmount = React.unmountComponentAtNode(mountNode);
    // console.log(unmount); // false
          if(this.state.loggedIn){
            //forceUpdate();
            //alert("loggedIn");    
                      //  this.forceUpdate();
 
                  }
            else {
                             return   <HomeContent />

            }
        }

  
  
   // console.log(response);

  
  

  

  /* Delete above */
  render() {
    return (
      <div className="App">
        <div className="Navbar">

          <Navbar />
                {this.conditionalRendering()}
                

          <div>{/* Now Playing: { this.state.nowPlaying.name } */}</div>
        </div>
        <div>
          <img src={this.state.nowPlaying.albumArt} style={{ height: 150 }} />
        </div>
        {this.state.loggedIn && (<Button onClick={() => { this.getTrack();}}> Get Invidual Analysis (getTrack)</Button>)}
                {this.state.loggedIn && (<Button onClick={() => { this.getSpotifyPlay();}}>{" "} Get Playlist TEMP</Button>)}

        {this.state.loggedIn && (<Button onClick={() => { this.testAmazonServer();}}>{" Get Valence Playlist"}</Button>)}
        {this.state.loggedIn && (<Button onClick={() => { this.getTrackGroup();}}>{" "}Get Energy Playlist</Button>)}


      </div>
	  
    );
	
  }
  
}

export default App;

// Count:	99
// Sum:	47.8164
// Average:	47.8164 / 99 = 0.48299393939394