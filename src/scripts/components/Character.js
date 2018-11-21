import React from 'react';

const Character = ({ direction, isWalking, position }) => {
  const characterPositionStyle = {
    top: position.y * 5,
    left: position.x * 5
  }
  return (
    <div className="character-container" style={characterPositionStyle}>
      <div className="sprite" data-direction={direction} data-walking={isWalking}>
      </div>
    </div>
  )
}

export default Character