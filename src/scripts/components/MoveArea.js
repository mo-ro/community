import React from 'react';
import Character from './Character';

export default class MoveArea extends React.Component {

  constructor() {
    super()
    this.event = 0
    setInterval(() => {
      this.handleDown();
    }, 120);
  }

  handleDown() {
    // console.log(this.props.mapState)
    this.props.judgeWalk(this.event, this.props.mapState, this.props.position)
    // if(!this.props.cannotWalk) {
    this.props.moveCharacter(this.event, this.props.cannotWalk)
    // }
  }

  handleUp() {
    this.event = 0
    this.props.stopCharacter()
  }

  render() {
    // console.log(this.props.cannotWalk)
    const { moveCharacter, stopCharacter, direction, isWalking, position } = this.props
    return (
      <div className="move-area" tabIndex="-1" onKeyDown={(event) => {event.persist(); this.event = event}} onKeyUp={() => this.handleUp()}>
        Direction: {direction} / Walking: {String(isWalking)}
        <Character direction={direction} isWalking={isWalking} position={position} />
      </div>
    )
  }
}