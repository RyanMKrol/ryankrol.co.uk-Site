import React, { Component } from 'react';

import styles from './ListensItemMini.module.css';

/**
 * A component representing a subset of information about a "listens" item
 */
class ListensItemMini extends Component {
  /**
   * @class
   * @param {object} props arguments to class
   */
  constructor(props) {
    super();

    this.albumLink = props.albumLink;
    this.albumName = props.albumName;
    this.thumbnail = props.thumbnail;

    if (!this.albumLink || !this.albumName || !this.thumbnail) {
      throw new Error('Could not create ListensItemMini');
    }
  }

  /**
   * Render method
   *
   * @returns {React.Component} JSX ListensItemMini component
   */
  render() {
    return (
      <a className={styles.listensMiniLink} href={this.albumLink}>
        <img alt={this.albumName} src={this.thumbnail} className={styles.listensItemMiniImage} />
      </a>
    );
  }
}

export default ListensItemMini;
