import React, { Component } from 'react'

import './AlbumItem.css';

class AlbumItem extends Component {
  constructor(props) {
    super()

    this.artist = props.artist
    this.albumName = props.albumName
    this.thumbnail = props.thumbnail
  }

  render() {
    return (
      <div className="AlbumItem">
        <div className="album-item-thumbnail">
          A Thumbnail - {this.thumbnail}
        </div>
        <div className="album-item-title">
          {this.artist} - {this.albumName}
        </div>
      </div>
    )
  }
}

export default AlbumItem
