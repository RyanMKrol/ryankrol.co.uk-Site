import React, {
  Component
} from 'react'
import fetch from "node-fetch"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { AlbumItem } from './../components'

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

  generateAlbumLinks() {
    return this.state.albums.map((album) => (
      <AlbumItem
        key={album.albumLink}
        artist={album.artist}
        albumName={album.albumName}
        thumbnail={album.thumbnail}
        albumLink={album.albumLink}
      />
    ))
  }

  render() {
    const albumsLoaded = this.state.albums !== undefined

    const content = albumsLoaded ?
      this.generateAlbumLinks() :
      <FontAwesomeIcon
        className ="fa-spin"
        icon={faCircleNotch}
        size="6x"
      />

    return (
      <div className="music-page-body">
        <div className="Music">
          {content}
        </div>
      </div>
    );
  }
}


export default Music;
