import React from "react";
import * as tiles from "../constants/treeObject";

export default class TreeObject extends React.Component {
  render() {

    const treeTexture = [
      ['tr_a', 'tr_b', 'tr_c', 'tr_d'],
      ['tr_e', 'tr_f', 'tr_g', 'tr_h'],
      ['tr_i', 'tr_j', 'tr_k', 'tr_l'],
      ['tr_m', 'tr_n', 'tr_o', 'tr_p'],
      ['tr_q', 'tr_r', 'tr_s', 'tr_t']
    ];

    const objectPosition = {
      top: this.props.position.y * 48,
      left: this.props.position.x * 48,
    }

    return (
      <div className="tree-object" style={objectPosition}>
        {treeTexture.map((column, index) => {
          return (
            <div className="column" key={index}>
              {treeTexture[index].map((tile, index) => {
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