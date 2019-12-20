import React, { Component } from 'react'

import './AlbumItem.css';

class AlbumItem extends Component {
  constructor(props) {
    super()

    this.artist = props.artist
    this.albumName = props.albumName
    this.thumbnail = props.thumbnail

    if (!(this.artist && this.albumName && this.thumbnail)) {
      throw new Error('Did not pass all required args for rendering AlbumItem')
    }
  }

  render() {
    return (
      <div className="AlbumItem">
        <div className="album-item-thumbnail">
          <img className="album-item-image" src={this.thumbnail} />
        </div>
        <div className="album-item-title">
          {this.artist} - {this.albumName}
        </div>
      </div>
    )
  }
}

export default AlbumItem
