import React, { Component } from "react";
import Navbar from "./component/Nav.js";
import Modal1 from "./component/modalComponent.js";
import HomeContent from "./component/homePage.js";
import { Button, Reveal, Modal,Image,Header} from "semantic-ui-react";
import ReactDOM from 'react-dom'

import { NavLink } from 'react-router-dom'
import "./App.css";
import SpotifyWebApi from "spotify-web-api-js";
const spotifyApi = new SpotifyWebApi();
//const AWS = require('aws-sdk/dist/aws-sdk-react-native');
const divStyleshow = {display: 'block'}


// Configure Spotify
var tempBuffer = [];
var bufferStr = "";

//Training Data Set
var happyValence = [
'https://open.spotify.com/playlist/4TNBeyX7awz89qwtTmh9D4',
'https://open.spotify.com/playlist/5rMh5sksZqzbXdbnEYw1g6',
'https://open.spotify.com/playlist/37i9dQZF1DX1lVhptIYRda',
'https://open.spotify.com/playlist/37i9dQZF1DXc4BD3pzYdKY',
'https://open.spotify.com/playlist/37i9dQZF1DX1tyCD9QhIWF',
'https://open.spotify.com/playlist/37i9dQZF1DX6ziVCJnEm59',
'https://open.spotify.com/playlist/37i9dQZF1DX2SK4ytI2KAZ',
'https://open.spotify.com/playlist/37i9dQZF1DX2aneNMeYHQ8',
'https://open.spotify.com/playlist/37i9dQZF1DXca8AyWK6Y7g',
'https://open.spotify.com/playlist/37i9dQZF1DWWQRwui0ExPn',
'https://open.spotify.com/playlist/37i9dQZF1DX2rcqmLx0nK4',
'https://open.spotify.com/playlist/37i9dQZF1DXbm6HfkbMtFZ',
'https://open.spotify.com/playlist/37i9dQZF1DXbvE0SE0Cczh',
'https://open.spotify.com/playlist/37i9dQZF1DWSlw12ofHcMM',
'https://open.spotify.com/playlist/37i9dQZF1DX4TnpT6vw5rE',
'https://open.spotify.com/playlist/37i9dQZF1DWSIO2QWRavWZ',
'https://open.spotify.com/playlist/37i9dQZF1DXcRXFNfZr7Tp',
'https://open.spotify.com/playlist/37i9dQZF1DXdgnLr18vPvu',
'https://open.spotify.com/playlist/37i9dQZF1DX5Ejj0EkURtP',
'https://open.spotify.com/playlist/37i9dQZF1DXdd3gw5QVjt9',
'https://open.spotify.com/playlist/37i9dQZF1DX8ky12eWIvcW',
'https://open.spotify.com/playlist/37i9dQZF1DX030FFx0YCXp',
'https://open.spotify.com/playlist/37i9dQZF1DWTwnEm1IYyoj',
'https://open.spotify.com/playlist/37i9dQZF1DWT5MrZnPU1zD',
'https://open.spotify.com/playlist/37i9dQZF1DWWEJlAGA9gs0',
'https://open.spotify.com/playlist/37i9dQZF1DX0b1hHYQtJjp',
'https://open.spotify.com/playlist/37i9dQZF1DX4pUKG1kS0Ac',
'https://open.spotify.com/playlist/37i9dQZF1DXdgz8ZB7c2CP',
'https://open.spotify.com/playlist/37i9dQZF1DX2SK4ytI2KAZ',
'https://open.spotify.com/playlist/37i9dQZF1DX4CgJVlGEIo5',
'https://open.spotify.com/playlist/37i9dQZF1DX8tZsk68tuDw',
'https://open.spotify.com/playlist/37i9dQZF1DXb3m918yXHxA',
'https://open.spotify.com/playlist/37i9dQZF1DX1adpUbAHocs',
'https://open.spotify.com/playlist/37i9dQZF1DWXS0qyx76B7l',
'https://open.spotify.com/playlist/37i9dQZF1DWSNuUMtr9por',
'https://open.spotify.com/playlist/37i9dQZF1DWU05aHRDUDnL',
'https://open.spotify.com/playlist/37i9dQZF1DX09NvEVpeM77',
'https://open.spotify.com/playlist/37i9dQZF1DWXLeA8Omikj7,',
'https://open.spotify.com/playlist/37i9dQZF1DX2sUQwD7tbmL',
'https://open.spotify.com/playlist/37i9dQZF1DXa2SPUyWl8Y5',
'https://open.spotify.com/playlist/37i9dQZF1DWVTkoPB1rnwz',
'https://open.spotify.com/playlist/37i9dQZF1DXdtcSdmzL4uq',
'https://open.spotify.com/playlist/37i9dQZF1DWTKEt712bZi2',
'https://open.spotify.com/playlist/37i9dQZF1DX2W6AhhHuQN4'
];
var sadValence =[];

var neutralValence = [];

var wildCards =[];



var DeleteArr = [];
var DeleteArr2 = [];
var valenceSum = 0;
var energySum = 0;
var valenceAverage = 0;
var valenceAB = '';
var energyAverage = 0;
var isModal = false;

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
      linearSad: "",
      energy: ""


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
      nowPlaying: { name: "Not Checked", albumArt: "" },
      valenceSum: ''
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
	
	  isModal = true;
    spotifyApi.getMyRecentlyPlayedTracks({limit: 50})
      .then(response => { 
	  
	  console.log(response)
	  
	  
        // Log Check console.log(response.items[0].track.name);
        //  Create Data Structure for UserData
		
		
        for (var i = 0; i < 49; i++) {
          if (tempBuffer.length != 49) {
            myData.userData.push({
              songName: " ",
              energy: "",
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
                    //   playlisfromSpot.push(response.items[i].track.uri);

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
              myData.userData[i].energy = response.audio_features[i].energy;
            }
          }
          
          // Quick test to check valence and get average
          for (var i=0;i<49;i++){
          
         //   console.log(myData.userData[i].spotValence);
         console.log(myData.userData[i].energy);
            if (myData.userData[i].spotValence !== "Missing"){
             valenceSum += parseFloat(myData.userData[i].spotValence);
              energySum += parseFloat(myData.userData[i].energy);

             this.state.valenceSum = valenceSum;
            }
            if (myData.userData[i].energy !== "Missing"){
            }


  }



   valenceAverage = valenceSum/50;
   energyAverage = energySum/50;
console.log(valenceAverage + "Valence Average");
console.log(energyAverage + "Energy Average");

   if (valenceAverage< .50 && energyAverage <.65) {
    valenceAB = "below";

}
    else {valenceAB = "above"}
   //
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
 componentWillMount() {
                                this.getTrack();


    }
        conditionalRendering(){
          if(this.state.loggedIn){
                console.log("the average of valene is");
                console.log(valenceAverage);


      return (< Modal1 />)

                      //  this.forceUpdate();
 
                  }
            else {
                             return   <HomeContent />

            }
        }


  
  
   // console.log(response);

  
  amIDepressed(bool){
//window.open();
    console.log(" am i depresssed??? + valenceAverage");

// If Button Preessed
    if(bool == true){
      console.log("bool is true");

      if(valenceAverage < 50){
        console.log("TTTTTTTT")

      }
      else {


      }


      this.forceUpdate();

    }
    

  }

  moodBoost(){
//var max = 100;
var min =happyValence.length;
console.log("happy valence len" + min)
var getPlaylist = Math.floor(Math.random() * (min - 0 + 1)) + 0;
console.log("get playlist" + getPlaylist )
var openingPlaylist = happyValence[getPlaylist];

    window.open(openingPlaylist);
  }


  /* Delete above */
  render() {

    return (
      <div className="App">
        <div className="Navbar">

          <Navbar />
                {this.conditionalRendering() } <h2> {valenceAverage + ""}</h2> 
                <div className ="hidden" >
                <h3> You currently have a emotional value that is {valenceAB} the average emotional score.  </h3>
                {this.amIDepressed}

<h3>Get a personalized playlist to boost your mood!</h3>
</div>
          <div>{/* Now Playing: { this.state.nowPlaying.name } */}</div>
        </div>
        <div>
          <img src={this.state.nowPlaying.albumArt} style={{ height: 150 }} />
        </div>

        {this.state.loggedIn && (<Button onClick={() => { this.amIDepressed(true);}}>{" Am I Depressed?"}</Button>)}
        {this.state.loggedIn && (<Button onClick={() => { this.moodBoost(true);}}>{" Mood Boosting Playlist?"}</Button>)}

      </div>
      
	  
    );
    this.forceUpdate();

  }

  
}

export default App;

// Count:	99
// Sum:	47.8164
// Average:	47.8164 / 99 = 0.48299393939394