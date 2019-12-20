import React, { Component } from 'react'

import './AlbumItem.css';

class AlbumItem extends Component {
  constructor(props) {
    super()

    this.artist = props.artist
    this.albumName = props.albumName
    this.thumbnail = props.thumbnail
    this.albumLink = props.albumLink

    if (!(this.artist && this.albumName && this.thumbnail && this.albumLink)) {
      throw new Error('Did not pass all required args for rendering AlbumItem')
    }
  }

  render() {
    return (
      <div className="AlbumItem">
        <div className="album-item-thumbnail">
          <a href={this.albumLink}>
            <img
              className="album-item-image"
              src={this.thumbnail}
              alt={`${this.artist} - ${this.albumName}`}
            />
          </a>
        </div>
        <div className="album-item-title">
          <a className="album-item-link" href={this.albumLink}>
            <h3>
              <span className="album-item-artist">{this.artist}</span>
               -
              <span className="album-item-album-name">{this.albumName}</span>
            </h3>
          </a>
        </div>
      </div>
    )
  }
}

export default AlbumItem
