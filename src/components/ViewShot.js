import React, { Component } from 'react';
import Shot from './Shot';
import shots from '../services/shots';

class ViewShot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shot: null,
      showInfo: true
    }
  }

  componentDidMount() {
    const { id } = this.props.params;
    shots.getShot(id).then(result => {
      const { data } = result;
      this.setState({ shot: data });
    });
  }

  render() {
    const { shot, showInfo } = this.state;
    return (
      <div className="view-shot">
        { shot ? <Shot shot={shot} showInfo={showInfo} /> : null }
      </div>
    )
  }
}

export default ViewShot;