import React from 'react';
import * as tiles from '../constants/townTiles';

export default class BgTiles extends React.Component {

  // renderMap() {
  //   const mapWidth = this.props.mapState[0][0].length;
  //   const mapHeight = this.props.mapState[0].length;
  //   let mapDOM = null;

  //   for(let i = 0; i < mapHeight; i++) {
  //     for(let j = 0; j < mapWidth; j++) {
        
  //     }
  //   }

  // }

  render() {
    return (
      <div className="town-tiles">
        {this.props.mapTexture.map((column, index) => {
          return (
            <div className="column" key={index}>
              {this.props.mapTexture[index].map((tile, index) => {
                let tileName = tiles[tile];
                return (<div className={`tile -${tileName}`} key={index}></div>)
              })}
            </div>
          )
        })}
      </div>
    )
  }
}