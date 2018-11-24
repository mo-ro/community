import React, { Component } from 'react';
import TownPage from '../containers/TownPage';
import MessageArea from '../containers/Message';
import firebase from "firebase"

export default class TalkPage extends Component {
  constructor(props) {
    super(props);
    this.uid = props.uid
    this.db = firebase.database();
    this.CurrentUser = this.db.ref(`/currentUsers/${this.uid}`);
    this.signIn();
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
      // this.CurrentUser.remove();
      this.CurrentUser.child('userData').remove();
        // ev.preventDefault(); 
        // return ev.returnValue = 'Are you sure you want to close?'; 
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