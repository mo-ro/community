import React from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom';

export default class Opening extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div className="opening-page">
        <ul className="character-list">
          <li className="item" onClick={() => (this.props.changeCharacter("a_1"))}>キャラa</li>
          <li className="item" onClick={() => (this.props.changeCharacter("a_2"))}>キャラb</li>
        </ul>
        <Link to="/talk" className="decide">決定</Link>
      </div>
    )
  }
}