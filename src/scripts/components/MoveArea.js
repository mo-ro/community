import React from 'react';
import Character from './Character';

export default class MoveArea extends React.Component {

  constructor() {
    super()
    this.flg = false
    this.event = 0
    setInterval(() => {
      this.handleDown();
    }, 120);
  }

  handleDown() {
    // this.props.startCharacter()
    // console.log(this.props.isWalking)
    // while(this.flg) {
      // this.flg = true
      // console.log('bb')
      
      // setTimeout(() => {
        console.log(this.event, 'aa')
        this.props.moveCharacter(this.event)
      // }, 10000)
    // }
  }

  handleUp() {
    // console.log('aaa')
    this.flg = false
    this.event = 0
    this.props.stopCharacter()
  }

  render() {
    const { moveCharacter, stopCharacter, direction, isWalking, position } = this.props
    return (
      <div className="move-area" tabIndex="-1" onKeyDown={(event) => {event.persist(); this.event = event}} onKeyUp={() => this.handleUp()}>
        Direction: {direction} / Walking: {String(isWalking)}
        <Character direction={direction} isWalking={isWalking} position={position} />
      </div>
    )
  }
}
// } = ({ moveCharacter, stopCharacter, direction, isWalking, position }) => {
//   // console.log(position)
//   return (
    
//   )
// }

// export default MoveArea;