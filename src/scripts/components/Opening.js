import React from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import firebase from "firebase";

export default class Opening extends React.Component {

  constructor(props) {
    super(props);
    this.db = firebase.database();
    this.CurrentUser = this.db.ref(`/currentUsers/${props.uid}`);
  }

  componentWillUnmount() {
    this.CurrentUser.child("userData").update({currentCharacter: this.props.currentCharacter});
  }

  render() {
    return (
      <div className="opening-page">
        <ul className="character-list">
          <li className="item -a_1" onClick={() => (this.props.changeCharacter("a_1", this.CurrentUser))}>キャラa</li>
          <li className="item -a_2" onClick={() => (this.props.changeCharacter("a_2", this.CurrentUser))}>キャラb</li>
          <li className="item -a_3" onClick={() => (this.props.changeCharacter("a_3", this.CurrentUser))}>キャラa</li>
          <li className="item -a_4" onClick={() => (this.props.changeCharacter("a_4", this.CurrentUser))}>キャラb</li>
          <li className="item -a_5" onClick={() => (this.props.changeCharacter("a_5", this.CurrentUser))}>キャラa</li>
          <li className="item -a_6" onClick={() => (this.props.changeCharacter("a_6", this.CurrentUser))}>キャラb</li>
          <li className="item -a_7" onClick={() => (this.props.changeCharacter("a_7", this.CurrentUser))}>キャラa</li>
          <li className="item -a_8" onClick={() => (this.props.changeCharacter("a_8", this.CurrentUser))}>キャラb</li>
          <li className="item -a_9" onClick={() => (this.props.changeCharacter("a_9", this.CurrentUser))}>キャラa</li>
          <li className="item -a_10" onClick={() => (this.props.changeCharacter("a_10", this.CurrentUser))}>キャラb</li>
        </ul>
        <Link to="/talk" className="decide">決定</Link>
      </div>
    )
  }
}