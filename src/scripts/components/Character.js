import React, { Component } from 'react';
import characterImage from '../../images/character.png';
import { connect } from 'react-redux';

const Character = ({ moveCharacter }) => {
  console.log(moveCharacter)
  
  return (
    <div className="character-container">
      <div className="sprite">
        <img src={characterImage} alt="" className="image"/>
      </div>
    </div>
  )
}

const mapPropsToState = state => ({
  test: state.character.test
});

export default connect(mapPropsToState)(Character);