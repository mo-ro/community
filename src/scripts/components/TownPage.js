import React, { Component } from 'react';
import Character from '../containers/Character';
import OtherCharacters from '../containers/OtherCharacters';
import BgTiles from './BgTiles';
import TownObjects from './TownObjects';
import firebase from "firebase"

export default class TownPage extends Component {

  render() {
    const mapState = [
      [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
      [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
      [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
      [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
      [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
      [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
      [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 9, 0, 0, 0, 0, 0, 0, 9],
      [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
      [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
      [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
      [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
      [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
      [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
      [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
      [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
      [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9]
    ]

    const mapTexture = [
      ['gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a'],
      ['gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a'],
      ['gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a'],
      ['gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a'],
      ['gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a'],
      ['gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a'],
      ['gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a'],
      ['gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a'],
      ['gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a'],
      ['gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a'],
      ['gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a'],
      ['gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a'],
      ['gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a'],
      ['gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a'],
      ['gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a'],
      ['gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'graa', 'gr_a', 'grca', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a']
    ]

    return (
        <div className="town-page">
          <BgTiles mapTexture={mapTexture} />
          <Character mapState={mapState} />
          <OtherCharacters />
          <TownObjects />
        </div>
    )
  }
}