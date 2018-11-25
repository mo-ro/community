import React from 'react';

// import a_1 from "../../images/characters/a_1.png";
// import a_2 from "../../images/characters/a_2.png";
// import a_3 from "../../images/characters/a_3.png";
// import a_4 from "../../images/characters/a_4.png";
// import a_5 from "../../images/characters/a_5.png";
// import a_6 from "../../images/characters/a_6.png";
// import a_7 from "../../images/characters/a_7.png";
// import a_8 from "../../images/characters/a_8.png";
// import a_9 from "../../images/characters/a_9.png";
// import a_10 from "../../images/characters/a_10.png";

const Character = ({ uid, direction, isWalking, position_x, position_y, submitting, message, currentCharacter }) => {
  const characterPositionStyle = {
    top: position_y * 48,
    left: position_x * 48
  }

  const characterImage = require(`../../images/characters/${currentCharacter}.png`);
  return (
    <div className="character-container" style={characterPositionStyle}>
      {message === "" ? null : <p className="message">{message}</p>}
      <div className="sprite" data-direction={direction} data-walking={isWalking} style={{backgroundImage: `url(${characterImage})`}}>
      </div>
    </div>
  )
}

export default Character