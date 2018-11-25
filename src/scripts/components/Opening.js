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
          <li className="item" onClick={() => (this.props.changeCharacter("a_1", this.CurrentUser))}>
            <div className="sprite -a_1"></div>
            <p className="name">ファーブニル</p>
          </li>
          <li className="item" onClick={() => (this.props.changeCharacter("a_2", this.CurrentUser))}>
            <div className="sprite -a_2"></div>
            <p className="name">ユングヴィ</p>
          </li>
          <li className="item" onClick={() => (this.props.changeCharacter("a_3", this.CurrentUser))}>
            <div className="sprite -a_3"></div>
            <p className="name">ヴァルキリー</p>
          </li>
          <li className="item" onClick={() => (this.props.changeCharacter("a_4", this.CurrentUser))}>
            <div className="sprite -a_4"></div>
            <p className="name">ゼブル</p>
          </li>
          <li className="item" onClick={() => (this.props.changeCharacter("a_5", this.CurrentUser))}>
            <div className="sprite -a_5"></div>
            <p className="name">フレイヤ</p>
          </li>
          <li className="item" onClick={() => (this.props.changeCharacter("a_6", this.CurrentUser))}>
            <div className="sprite -a_6"></div>
            <p className="name">ミスト</p>
          </li>
          <li className="item" onClick={() => (this.props.changeCharacter("a_7", this.CurrentUser))}>
            <div className="sprite -a_7"></div>
            <p className="name">オーディン</p>
          </li>
          <li className="item" onClick={() => (this.props.changeCharacter("a_8", this.CurrentUser))}>
            <div className="sprite -a_8"></div>
            <p className="name">トール</p>
          </li>
          <li className="item" onClick={() => (this.props.changeCharacter("a_9", this.CurrentUser))}>
            <div className="sprite -a_9"></div>
            <p className="name">ヴェルダンディ</p>
          </li>
          <li className="item" onClick={() => (this.props.changeCharacter("a_10", this.CurrentUser))}>
            <div className="sprite -a_10"></div>
            <p className="name">スルズ</p>
          </li>
        </ul>
        <Link to="/talk" className="decide">決定</Link>
      </div>
    )
  }
}