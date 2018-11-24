import React from 'react';

const Character = ({ uid, direction, isWalking, position_x, position_y, submitting, message }) => {
  const characterPositionStyle = {
    top: position_y * 48,
    left: position_x * 48
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