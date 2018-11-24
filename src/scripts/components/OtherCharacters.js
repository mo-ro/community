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
    });
  }
  
  render() {
    // const { direction, isWalking, position, message, submitting } = this.props.currentUsers
    // console.log(this.props.currentUsers, 876543)
    let renderUsers = Object.keys(this.props.currentUsers).map((key) => {
      console.log(key === this.props.currentUid)
      if(key !== this.props.currentUid) {
        console.log('aaaaaaaa')
        return this.props.currentUsers[key];
      }
      return;
    })
    return (
      <div className="others">
        {renderUsers.map((user) => {
          if(user) {
            return (
              // <div className="a"></div>
              <Character direction={user.direction} isWalking={user.isWalking} position={user.position} message={user.message} submitting={user.submitting} />
            )
          }
        })}
      </div>
    )
  }
}