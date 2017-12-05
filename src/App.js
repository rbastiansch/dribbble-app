import React, { Component } from 'react';
import { Link }  from 'react-router';
import './stylesheets/style.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="header">
          <h2>
            <Link to="/">Dribbble App</Link>
          </h2>
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default App;