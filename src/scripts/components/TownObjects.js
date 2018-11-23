import React from "react";
import HouseObject from "./HouseObject";
import RoadObject from "./RoadObject";
import TreeObject from "./TreeObject";

export default class TownObjects extends React.Component {

  render() {
    const treePosition = {
      x: 10,
      y: 2
    }
    return (
      <div className="town-objects">
        <TreeObject position={treePosition} />
        {/* <RoadObject /> */}
        {/* <HouseObject position={this.homePosition} /> */}
      </div>
    )
  }
}