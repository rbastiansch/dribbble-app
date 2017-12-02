import React, { Component } from 'react';

const styles = {
  small: { flexBasis: '6em' },
  large: { flexBasis: '12em' }
}

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      largeSize: true
    }
  }

  render() {
    const { shots } = this.props;
    const { largeSize } = this.state;
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
                <div key={key} className="shot" style={largeSize ? styles.large : styles.small }>
                  <img src={shot.images.normal} />
                  <p>{shot.title}</p>
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