import React from 'react';
import Character from "./Character";

export default class OtherCharacter extends React.Component {
  render() {
    return (
      <Character position={{x: 4, y: 7}} />
    )
  }
}