import React from "react";
import * as tiles from "../constants/objectTile";

export default class HouseObject extends React.Component {
  render() {
    return (
      <div className="layer">
        {this.props.texture.map((column, index) => {
          return (
            <div className="column" key={index}>
              {this.props.texture[index].map((tile, index) => {
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