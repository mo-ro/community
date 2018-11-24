import React from 'react';
import Character from "./Character";
import firebase from "firebase";

export default class OtherCharacters extends React.Component {
  constructor() {
    super();
    this.db = firebase.database();
    this.currentUsers = this.db.ref("/currentUsers");

    this.currentUsers.on("value", (snapshot) => {
      this.props.changeUserNum(snapshot.val());
      console.log(snapshot.val(), 999)
    });
  }
  
  render() {
    console.log(this.props)
    let renderUsers = Object.keys(this.props.currentUsers).map((key) => {return this.props.currentUsers[key]})
    return (
      <div className="others">
        {renderUsers.map((user) => {
          return (
            <Character position={{x: 5, y: 4}} />
          )
        })}
      </div>
    )
  }
}