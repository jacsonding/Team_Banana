import React, { Component } from "react";
import Navbar from "./component/Nav.js";
import HomeContent from "./component/homePage.js";
import { Button } from "semantic-ui-react";
import { NavLink } from 'react-router-dom'
import "./App.css";
import SpotifyWebApi from "spotify-web-api-js";
const spotifyApi = new SpotifyWebApi();
//const AWS = require('aws-sdk/dist/aws-sdk-react-native');
const aws = require('aws-sdk');
const fs = require('fs');
const path = require('path');
var uuid = require('uuid');


// Configure the AWS environment
 aws.config = new aws.Config();
	aws.config.secretAccessKey = "6YU/vGBtrUhJpQwSKVZObYlQHKqwyv+M2EeOl4v0";
	aws.config.accessKeyId ="AKIAJWDQMVRDEUW5L5TA";

const s3 = new aws.S3();
// Upload Object
 s3.putObject({
  Bucket: 'globalData',
  Key: 'users.json',
  Body: "test",
  ContentType: "application/json"},
  function (err,data) {
    console.log(JSON.stringify(err) + " " + JSON.stringify(data));
  }
);

// Configure Spotify
var tempBuffer = [];
var bufferStr = "";

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
  
  testAmazonServer(){
	  console.log("Testing amazon server");
	   s3.putObject({
  Bucket: 'globalData',
  Key: 'users.json',
  Body: "test",
  ContentType: "application/json"},
  function (err,data) {
    console.log(JSON.stringify(err) + " " + JSON.stringify(data));
  }
);
  }
/* Delete me after use */
  getPlaylistVal() {
	
	  
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
        

  
  
   // console.log(response);

  
  

  

  /* Delete above */
  render() {
    return (
      <div className="App">
        <div className="Navbar">
          <Navbar />
          <div>{/* Now Playing: { this.state.nowPlaying.name } */}</div>
        </div>
        <div>
          <img src={this.state.nowPlaying.albumArt} style={{ height: 150 }} />
        </div>
        {this.state.loggedIn && (<button onClick={() => { this.getTrack();}}> Get Invidual Analysis (getTrack)</button>)}
        {this.state.loggedIn && (<button onClick={() => { this.testAmazonServer();}}>{" "}Test Amazon Server{" Test Amazon Server"}</button>)}
        {this.state.loggedIn && (<button onClick={() => { this.getTrackGroup();}}>{" "}Get Group Analysis(getTrackGroup){" "}</button>)}


        <HomeContent />
      </div>
	  
    );
	
  }
  
}

export default App;

// Count:	99
// Sum:	47.8164
// Average:	47.8164 / 99 = 0.48299393939394