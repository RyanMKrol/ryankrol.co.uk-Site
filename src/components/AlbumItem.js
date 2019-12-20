import React, { Component } from 'react'

import './AlbumItem.css';

class AlbumItem extends Component {
  render() {
    return (
      <div className="AlbumItem">
        <div className="album-item-thumbnail">
          A Thumbnail
        </div>
        <div className="album-item-title">
          A Title
        </div>
      </div>
    )
  }
}

export default AlbumItem
