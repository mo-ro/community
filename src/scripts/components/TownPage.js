import React, { Component } from 'react';
import Character from '../containers/Character';

export default class TownPage extends Component {

  render() {
    // console.log(this.props)
    return (
        <div className="town-page">
          <Character mapState={this.props.xy} />
        </div>
    )
  }
}