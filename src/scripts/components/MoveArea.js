import React from 'react';
import Character from './Character';

const MoveArea = ({ moveCharacter, stopCharacter, direction, isWalking }) => {
  return (
    <div className="move-area" tabIndex="-1" onKeyDown={(event) => moveCharacter(event)} onKeyUp={() => stopCharacter()}>
      Direction: {direction} / Walking: {String(isWalking)}
      <Character direction={direction} isWalking={isWalking} />
    </div>
  )
}

export default MoveArea;