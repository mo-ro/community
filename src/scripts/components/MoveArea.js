import React from 'react';
import Character from './Character';

const MoveArea = ({ moveCharacter, stopCharacter, direction, isWalking, position }) => {
  console.log(position)
  return (
    <div className="move-area" tabIndex="-1" onKeyDown={(event) => moveCharacter(event)} onKeyUp={() => stopCharacter()}>
      Direction: {direction} / Walking: {String(isWalking)}
      <Character direction={direction} isWalking={isWalking} position={position} />
    </div>
  )
}

export default MoveArea;