import React from 'react';
import Character from "./Character";
import firebase from "firebase";

export default class OtherCharacters extends React.Component {
  constructor(props) {
    super(props);
    this.db = firebase.database();
    this.currentUsers = this.db.ref("/currentUsers");

    this.currentUsers.on("value", (snapshot) => {
      this.props.changeUserNum(snapshot.val());
    });
  }
  
  render() {
    let renderUsers = Object.keys(this.props.currentUsers).map((key) => {
      if(key !== this.props.currentUid) {
        return this.props.currentUsers[key];
      }
      return;
    })
    return (
      <div className="others">
        {renderUsers.map((user) => {
          if(user) {
            return (
              <Character direction={user.userData.direction} isWalking={user.userData.isWalking} position_x={user.userData.position_x} position_y={user.userData.position_y} message={user.userData.message} submitting={user.userData.submitting} currentCharacter={user.userData.currentCharacter} />
            )
          }
        })}
      </div>
    )
  }
}