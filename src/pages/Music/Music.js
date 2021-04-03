import React, { Component } from 'react';
import fetch from 'node-fetch';

import { AlbumItem, LoadingIcon } from '../../components';
import { MUSIC_PAGE_DATA } from '../../data';
import { apiUtils } from '../../utils';

import './Music.css';

const ALBUM_API_ENDPOINT = `${apiUtils.default()}/albums`;

/**
 * Page to display my music
 */
class Music extends Component {
  /**
   * constructor
   */
  constructor() {
    super();

    this.state = {
      albums: undefined,
    };

    fetch(ALBUM_API_ENDPOINT)
      .then((response) => response.json())
      .then((albumData) => {
        this.setState({
          albums: albumData,
        });
      });
  }

  /**
   * Generates album items using albums stored in state
   *
   * @returns {string} HTML for every album item available to the page
   */
  generateAlbumItems() {
    if (typeof this.state.albums === 'undefined') {
      return <LoadingIcon />;
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
    ));
  }

  /**
   * Generates the summary line for the albums page
   *
   * @returns {string} HTML for the albums summary line
   */
  generatePageSummary() {
    if (typeof this.state.albums === 'undefined') {
      return null;
    }

    return (
      <div className="music-page-summary">
        <h3>{MUSIC_PAGE_DATA.summary}</h3>
      </div>
    );
  }

  /**
   * Renders the page
   *
   * @returns {string} HTML for the page
   */
  render() {
    const content = this.generateAlbumItems();
    const pageSummary = this.generatePageSummary();

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
