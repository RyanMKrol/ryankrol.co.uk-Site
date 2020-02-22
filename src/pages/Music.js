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
    return (typeof this.state.albums !== "undefined") ?
      this.state.albums.map((album) => (
        <AlbumItem
          key={album.albumLink}
          artist={album.artist}
          albumName={album.albumName}
          thumbnail={album.thumbnail}
          albumLink={album.albumLink}
          playcount={album.playcount}
        />
      ))
      : <LoadingIcon />
  }

  generateMusicSummary() {
    const albumSummary = (typeof this.state.albums !== "undefined") ?
      MUSIC_PAGE_DATA.summary:
      null

    return (
      <div className="music-page-summary">
        <h3>
          {albumSummary}
        </h3>
      </div>
    )
  }

  render() {
    const content = this.generateAlbumItems()
    const albumSummary = this.generateMusicSummary()

    return (
      <div className="music-page-body">
        <div className="Music">
          {albumSummary}
          {content}
        </div>
      </div>
    );
  }
}


export default Music;
