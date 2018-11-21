import React from 'react';
import characterImage from '../../images/character.png';
import { connect } from 'react-redux';
import Character from './Character';

const MoveArea = ({ moveCharacter, direction, isWalking }) => {
  
  return (
    <div className="move-area" tabIndex="-1" onKeyDown={(event) => moveCharacter(event)}>
      <Character />
    </div>
  )
}

const mapPropsToState = state => ({
  test: state.character.test
});

export default connect(mapPropsToState)(MoveArea);