import React, { Component } from 'react';

import styles from './ListensItemFull.module.css';

/**
 * A component representing all information about a "listens" item
 */
class ListensItemFull extends Component {
  /**
   * @class
   * @param {object} props arguments to class
   */
  constructor(props) {
    super();

    this.albumLink = props.albumLink;
    this.albumName = props.albumName;
    this.thumbnail = props.thumbnail;
    this.artist = props.artist;
    this.playcount = props.playcount;

    if (!this.albumLink || !this.albumName || !this.thumbnail || !this.artist || !this.playcount) {
      throw new Error('Could not create ListensItemFull');
    }
  }

  /**
   * Render method
   */
  render() {
    return (
      <div className={styles.listensItem}>
        <a href={this.albumLink}>
          <div className={styles.listensItemImage}>
            <img alt={this.albumName} src={this.thumbnail} />
          </div>
          <span className="highlighted">Artist:</span>
          <span>{this.artist}</span>
          <br />
          <span className="highlighted">AlbumName:</span>
          <span>{this.albumName}</span>
          <br />
          <span className="highlighted">Playcount:</span>
          <span>{this.playcount}</span>
          <br />
        </a>
      </div>
    );
  }
}

export default ListensItemFull;
