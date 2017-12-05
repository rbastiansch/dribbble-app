import React, { Component } from 'react';
import Info from './Info';

class Shot extends Component {
  render() {
    const { shot, showInfo } = this.props;
    return (
      <div className="item">
        <div className="main">
          <img src={shot.images.normal} />
          <p>{shot.title}</p>
        </div>
        { showInfo && shot ? <Info shot={shot} /> : null }
      </div>
    )
  }
}

export default Shot;