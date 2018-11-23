import React from "react";
import * as tiles from "../constants/objectTile";
import Layer from "./HouseLayer";

export default class HouseObject extends React.Component {
  render() {

    const houseTexture1 = [
      ['ho_null', 'ho_null', 'ho_null', 'ho_null'],
      ['ho_null', 'ho_q', 'ho_r', 'ho_null'],
      ['ho_null', 'ho_a', 'ho_b', 'ho_null'],
      ['ho_null', 'ho_c', 'ho_c', 'ho_null'],
      ['ho_null', 'nullo_n', 'ho_null', 'ho_null'],
    ];

    const houseTexture2 = [
      ['ho_null', 'ho_null', 'ho_null', 'ho_null'],
      ['ho_null', 'ho_null', 'ho_null', 'ho_null'],
      ['ho_null', 'ho_null', 'ho_null', 'ho_null'],
      ['ho_null', 'ho_y', 'ho_z', 'ho_null'],
      ['ho_u', 'ho_u', 'ho_u', 'ho_u'],
    ];

    return (
      <div className="house-object">
        {/* <Layer texture={houseTexture2} /> */}
        <Layer texture={houseTexture1} />
      </div>
    )
  }
}