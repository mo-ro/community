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
    this.CurrentUser.set({uid: this.uid});
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