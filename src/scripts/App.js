import React, { Component } from 'react';
import firebase from 'firebase';

// components
import TalkPage from './components/TalkPage';

class App extends Component {
  static getDerivedStateFromProps() {
    var config = {
      apiKey: "AIzaSyDXbRYWWMe93YAsFbuYnxepWOfiSPoX0I4",
      authDomain: "comunity-47633.firebaseapp.com",
      databaseURL: "https://comunity-47633.firebaseio.com",
      projectId: "comunity-47633",
      storageBucket: "comunity-47633.appspot.com",
      messagingSenderId: "570558314214"
    };
    firebase.initializeApp(config);
    firebase.auth().signInAnonymously();
    console.log(config)
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        console.log(user)
        // ...
      } else {
        // User is signed out.
        // ...
      }
      // ...
    });
  }

  render() {
    return (
      <div className="App">
        <TalkPage />
      </div>
    );
  }
}

export default App;