import React from 'react';
import characterImage from '../../images/character.png';
import { connect } from 'react-redux';
import Character from './Character';

const MoveArea = ({ moveCharacter, stopCharacter, direction, isWalking }) => {
  console.log(isWalking, 7777)
  return (
    <div className="move-area" tabIndex="-1" onKeyDown={(event) => moveCharacter(event)} onKeyUp={() => stopCharacter()}>
      {direction}
      <Character />
      {String(isWalking)}
    </div>
  )
}

const mapPropsToState = state => ({
  test: state.character.test
});

export default connect(mapPropsToState)(MoveArea);