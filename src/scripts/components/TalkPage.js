import React, { Component } from 'react';
import TownPage from '../containers/TownPage';
import MessageArea from '../containers/Message';

export default class TalkPage extends Component {

  render() {
    return (
      <div className="talk-page">
        <TownPage />
        <MessageArea />
      </div>
    )
  }
}