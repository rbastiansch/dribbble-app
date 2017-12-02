import React, { Component } from 'react';
import Gallery from './Gallery';
import shots from '../services/shots';

class Shots extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shots: [],
    }
  }

  componentDidMount() {
    shots.getShots().then((response) => {
      const { data } = response;
      this.setState({ shots: data});
    })
  }

  render() {
    const { shots } = this.state;
    return (
      <div className="shots">
        <div className="nav">
          <h3>Shots List</h3>
        </div>
        <Gallery shots={shots} smallShots={this.smallShots}/>
      </div>
    )
  }
}

export default Shots;