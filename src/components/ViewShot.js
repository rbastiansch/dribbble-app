import React, { Component } from 'react';
import shots from '../services/shots';

class ViewShot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shot: null
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
    const { shot } = this.state;
    return (
      <div className="view-shot">
        {
          shot ? 
            <div className="shot">
              <div className="main">
                <img src={shot.images.normal} />  
              </div>
              <div className="info">
                <div className="like">
                  <a>
                    <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                  </a>
                  <span>{shot.likes_count} likes</span>
                </div>
                <div className="views">
                  <span>{shot.views_count} views</span>
                </div>
                <div className="author">
                  <span>Created by {shot.user.name}</span>
                </div>
              </div>
            </div>
          : null
        }
      </div>
    )
  }
}

export default ViewShot;