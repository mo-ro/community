import React from 'react';

const Character = ({ uid, direction, isWalking, position, submitting, message }) => {
  const characterPositionStyle = {
    top: position.y * 48,
    left: position.x * 48
  }
  return (
    <div className="character-container" style={characterPositionStyle}>
      {message === "" ? null : <p className="message">{message}</p>}
      <div className="sprite" data-direction={direction} data-walking={isWalking}>
      </div>
    </div>
  )
}

export default Character