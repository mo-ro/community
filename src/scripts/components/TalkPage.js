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

  componentWillUnmount() {
    this.CurrentUser.child('userData').remove();
  }

  signIn() {
    this.CurrentUser.child('userData').set({
      uid: this.uid,
      direction: this.props.direction,
      isWalking: this.props.isWalking,
      cannotWalk: this.props.cannotWalk,
      position_x: this.props.position_x,
      position_y: this.props.position_y,
      message: this.props.message,
      currentCharacter: "a_1"
    });

    window.addEventListener("beforeunload", () => { 
      this.CurrentUser.child('userData').remove();
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