import React, { Component } from 'react';
import Character from '../containers/Character';
import BgTiles from './BgTiles';

export default class TownPage extends Component {

  render() {
    const mapState = [
      [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
      [9, 0, 0, 0, 0, 0, 0, 0, 0, 9],
      [9, 0, 0, 0, 0, 0, 0, 0, 0, 9],
      [9, 0, 0, 0, 0, 0, 0, 0, 0, 9],
      [9, 0, 0, 0, 0, 0, 0, 0, 0, 9],
      [9, 0, 0, 0, 0, 0, 0, 0, 0, 9],
      [9, 0, 0, 0, 0, 0, 0, 0, 0, 9],
      [9, 0, 0, 0, 0, 0, 0, 0, 0, 9],
      [9, 0, 0, 0, 0, 0, 0, 0, 0, 9],
      [9, 9, 9, 9, 9, 9, 9, 9, 9, 9]
    ]

    const mapTexture = [
      ['sa_a', 'sa_a', 'sa_a', 'sa_a', 'sa_a', 'sa_a', 'sa_a', 'sa_a', 'sa_a', 'sa_a'],
      ['sa_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'sa_a'],
      ['sa_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'sa_a'],
      ['sa_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'sa_a'],
      ['sa_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'sa_a'],
      ['sa_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'sa_a'],
      ['sa_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'sa_a'],
      ['sa_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'sa_a'],
      ['sa_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'gr_a', 'sa_a'],
      ['sa_a', 'sa_a', 'sa_a', 'sa_a', 'sa_a', 'sa_a', 'sa_a', 'sa_a', 'sa_a', 'sa_a']
    ]

    return (
        <div className="town-page">
          <BgTiles mapTexture={mapTexture} />
          <Character mapState={mapState} />
        </div>
    )
  }
}