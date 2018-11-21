import React from 'react';

const Character = ({ direction, isWalking, position }) => {
  const characterPositionStyle = {
    top: position.y * 48,
    left: position.x * 48
  }
  return (
    <div className="character-container" style={characterPositionStyle}>
      <div className="sprite" data-direction={direction} data-walking={isWalking}>
      </div>
    </div>
  )
}

export default Character