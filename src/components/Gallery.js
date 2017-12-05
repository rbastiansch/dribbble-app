import React, { Component } from 'react';
import { Link } from 'react-router';
import Shot from './Shot';
import shots from '../services/shots';

const styles = {
  small: { flexBasis: '8em' },
  large: { flexBasis: '14em' }
}

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shots: [],
      largeSize: true
    }
  }

  componentDidMount() {
    shots.getShots().then((response) => {
      const { data } = response;
      this.setState({ shots: data});
    });
  }

  render() {
    const { shots, largeSize } = this.state;
    return(
      <div className="gallery">
        <div className="select-size">
          <span><i className="fa fa-plus-square-o" aria-hidden="true"></i></span>
          <div className="buttons">
            <button type="button" className="button" title="Small shots"
                    onClick={() => this.setState({ largeSize: false }) } >
              <i className="fa fa-tablet" aria-hidden="true"></i>
            </button>
            <button className="button" title="Large shots" 
                    onClick={() => this.setState({ largeSize: true })} >
              <i className="fa fa-tablet fa-2x" aria-hidden="true"></i>
            </button>
          </div>
        </div>
        <div className="grid">
          {
            shots.map((shot, key) => {
              return (
                <div key={key} style={ largeSize ? styles.large : styles.small }>
                  <Link to={`/shot/${shot.id}`} >
                    <Shot shot={shot} />
                  </Link>
                </div>
              )
            })
          }
        </div>        
      </div>
    )
  }
}

export default Gallery;