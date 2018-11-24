import React, { Component } from 'react';
import firebase from 'firebase';

import Auth from "./containers/Auth";

// components
import TalkPage from './components/TalkPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Auth />
      </div>
    );
  }
}

export default App;