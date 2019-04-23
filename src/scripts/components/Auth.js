import React, { Component } from 'react';
import firebase from 'firebase';
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';

// components
import TalkPage from '../containers/TalkPage';
import Opening from "../containers/Opening";

class Auth extends Component {
  constructor() {
    super();
    this.config = {
      apiKey: "AIzaSyDXbRYWWMe93YAsFbuYnxepWOfiSPoX0I4",
      authDomain: "comunity-47633.firebaseapp.com",
      databaseURL: "https://comunity-47633.firebaseio.com",
      projectId: "comunity-47633",
      storageBucket: "comunity-47633.appspot.com",
      messagingSenderId: "570558314214"
    }
    firebase.initializeApp(this.config);
  }

  componentDidMount() {
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
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Opening} />
          <Route path="/talk" render={() => {
            return (
              // this.props.uid ? <TalkPage uid={this.props.uid} /> : <Redirect to="/opening" />
              this.props.uid ? <TalkPage /> : null
            )
          }} />
          <Route path="/battle" render={() => {
            return (
              // this.props.battle ? <BattlePage /> : null
              // <BattlePage />
              <div></div>

            )
          }} />
        </div>
      </BrowserRouter>
      // this.props.uid ? <Opening uid={this.props.uid} /> : null
    );
  }
}

export default Auth;