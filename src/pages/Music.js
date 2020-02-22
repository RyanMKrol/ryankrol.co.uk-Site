import React, { Component } from 'react'
import fetch from "node-fetch"

import { AlbumItem, LoadingIcon } from './../components'
import { MUSIC_PAGE_DATA } from './../data/MusicPageData'

import './Music.css';

const ALBUM_API_ENDPOINT = "http://www.ryankrol.co.uk/api/albums"

class Music extends Component {
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

  generateAlbumItems() {
    if (typeof this.state.albums === "undefined") {
      return <LoadingIcon />
    }

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

  generatePageSummary() {
    if (typeof this.state.albums === "undefined") {
      return null
    }

    return (
      <div className="music-page-summary">
        <h3>
          {MUSIC_PAGE_DATA.summary}
        </h3>
      </div>
    )
  }

  render() {
    const content = this.generateAlbumItems()
    const pageSummary = this.generatePageSummary()

    return (
      <div className="music-page-body">
        <div className="Music">
          {pageSummary}
          {content}
        </div>
      </div>
    );
  }
}


export default Music;
