import React, { Component } from 'react';
import Shots from './components/Shots';
import './stylesheets/style.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="header">
          <h2>Dribbble App</h2>
        </div>
        <Shots />
      </div>
    )
  }
}

export default App;