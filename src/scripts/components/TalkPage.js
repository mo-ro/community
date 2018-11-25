import React, { Component } from 'react';
import TownPage from '../containers/TownPage';
import MessageArea from '../containers/Message';
import firebase from "firebase"

export default class TalkPage extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    this.uid = props.uid
    this.db = firebase.database();
    this.CurrentUser = this.db.ref(`/currentUsers/${this.uid}`);
    this.signIn();
  }

  componentWillUnmount() {
    // this.CurrentUser.child('userData').remove();
  }

  signIn() {
    this.CurrentUser.child('userData').set({
      uid: this.uid,
      direction: "down",
      isWalking: false,
      cannotWalk: false,
      position_x: 3,
      position_y: 3,
      message: ""
    });

    window.addEventListener("beforeunload", () => { 
      // this.CurrentUser.child('userData').remove();
    }); 
  }

  render() {
    return (
      <div className="talk-page">
        <TownPage />
        <MessageArea />
      </div>
    )
  }
}