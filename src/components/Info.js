import React, { Component } from 'react';

class Info extends Component {
  render() {
    const { shot } = this.props;
    return (
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
    )
  }
}

export default Info;