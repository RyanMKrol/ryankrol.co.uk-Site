import React, {
  Component
} from 'react'
import fetch from "node-fetch"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

import logo from './../assets/logo.svg';

import './Music.css';

const ALBUM_API_ENDPOINT = "http://www.ryankrol.co.uk/api/albums"

class Music extends Component {
  constructor() {
    super()

    this.state = {
      albums: undefined
    }

    const albumData = fetch(ALBUM_API_ENDPOINT).then((response) => {
      return response.json()
    }).then((albumData) => {
      this.setState({
        albums: albumData
      })
    })
  }

  render() {
    console.log(this.state)
    const albumsLoaded = false

    const content = albumsLoaded ?
      <p>Albums have loaded</p> :
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
