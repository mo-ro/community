import React from 'react';

const Character = ({ direction, isWalking }) => {
  return (
    <div className="character-container">
      <div className="sprite" data-direction={direction} data-walking={isWalking}>
      </div>
    </div>
  )
}

export default Character