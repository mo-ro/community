import React from "react";
import * as tiles from "../constants/roadObject";

export default class HouseObject extends React.Component {
  render() {

    const roadTexture = [
      ['ro_null', 'ro_null', 'ro_null', 'ro_null', 'ro_null', 'ro_null', 'ro_null', 'ro_null'],
      ['ro_null', 'ro_null', 'ro_null', 'ro_null', 'ro_null', 'ro_null', 'ro_null', 'ro_null'],
      ['ro_a', 'ro_c', 'ro_null', 'ro_null', 'ro_null', 'ro_null', 'ro_null', 'ro_null'],
      ['ro_null', 'ro_null', 'ro_null', 'ro_null', 'ro_null', 'ro_null', 'ro_null', 'ro_null'],
      ['ro_null', 'ro_null', 'ro_null', 'ro_null', 'ro_null', 'ro_null', 'ro_null', 'ro_null']
    ];

    return (
      <div className="road-object">
        {roadTexture.map((column, index) => {
          return (
            <div className="column" key={index}>
              {roadTexture[index].map((tile, index) => {
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