import React from 'react';
import Character from './Character';
import firebase from "firebase";

export default class MoveArea extends React.Component {

  constructor(props) {
    super(props);
    this.event = 0
    setInterval(() => {
      this.handleDown();
    }, 120);
    this.db = firebase.database();
    this.CurrentUser = this.db.ref(`/currentUsers/${props.uid}`);
  }

  handleDown() {
    this.props.judgeWalk(this.event, this.props.mapState, this.props.position)
    // if(!this.props.cannotWalk) {
    this.props.moveCharacter(this.event, this.props.cannotWalk)
    // }
  }

  handleUp() {
    this.event = 0
    this.props.stopCharacter()
  }

  componentDidUpdate(prevProps) {
    let updates = {};
    // console.log(prevProps)
    for(let key in prevProps) {
      if(prevProps[key] !== this.props[key] && key !== "mapState") {
        console.log(prevProps[key], this.props[key], key);
        updates[key] = this.props[key]
      }
    }

    this.CurrentUser.update(updates);
  }

  render() {
    // あとで分割せねば
    const { uid, moveCharacter, stopCharacter, direction, isWalking, position, message, submitting } = this.props
    return (
      <div className="move-area" tabIndex="-1" onKeyDown={(event) => {event.persist(); this.event = event}} onKeyUp={() => this.handleUp()}>
        Direction: {direction} / Walking: {String(isWalking)}
        <Character direction={direction} isWalking={isWalking} position={position} message={message} submitting={submitting} />
      </div>
    )
  }
}