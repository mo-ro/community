import React from 'react';
import characterImage from '../../images/character.png';
import { connect } from 'react-redux';

const Character = ({ moveCharacterUp, direction, isWalking }) => {
  console.log(direction, isWalking)
  
  return (
    <div className="character-container" onClick={moveCharacterUp}>
      <div className="sprite">
        <img src={characterImage} alt="" className="image"/>
      </div>
    </div>
  )
}

// const mapPropsToState = state => ({
//   test: state.character.test
// });

// export default connect(mapPropsToState)(Character);

export default Character