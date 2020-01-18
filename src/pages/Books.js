import React, { Component } from 'react'
import { AlbumItem, LoadingIcon } from './../components'
import fetch from "node-fetch"

import './Books.css';

const ALBUM_API_ENDPOINT = "http://www.ryankrol.co.uk/api/albums"

class Books extends Component {
  constructor() {
    super()

    this.state = {
      albums: undefined
    }

    fetch(ALBUM_API_ENDPOINT).then((response) => {
      return response.json()
    }).then((albumData) => {
      this.setState({
        albums: albumData
      })
    })
  }

  generateAlbumLinks() {
    return this.state.albums.map((album) => (
      <AlbumItem
        key={album.albumLink}
        artist={album.artist}
        albumName={album.albumName}
        thumbnail={album.thumbnail}
        albumLink={album.albumLink}
        playcount={album.playcount}
      />
    ))
  }

  render() {
    const albumsLoaded = this.state.albums !== undefined
    const content = albumsLoaded ?
      this.generateAlbumLinks() :
      <LoadingIcon />

    return (
      <div className="books-page-body">
        <div className="Books">
          {content}
        </div>
      </div>
    );
  }
}


export default Books;
