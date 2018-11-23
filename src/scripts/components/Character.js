import React from 'react';

const Character = ({ direction, isWalking, position, submitting, message }) => {
  const characterPositionStyle = {
    top: position.y * 48,
    left: position.x * 48
  }
  return (
    <div className="character-container" style={characterPositionStyle}>
      {submitting ? <p className="message">{message}</p> : null}
      <div className="sprite" data-direction={direction} data-walking={isWalking}>
      </div>
    </div>
  )
}

export default Character