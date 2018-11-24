import React, { Component } from 'react';
import firebase from 'firebase';

// components
import TalkPage from './TalkPage';

class Auth extends Component {
  componentDidMount() {
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
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.]
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        this.props.signIn(uid);
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
      this.props.uid ? <TalkPage uid={this.props.uid} /> : null
    );
  }
}

export default Auth;