import React, { Component } from 'react';

import { DataCollection, AlbumRatingsItem } from '../../../components';

import styles from './AlbumRatingsPage.module.css';

import { baseEndpoint, generateCustomSorter } from '../../../utils/ProdUtils';

/**
 * Page for rendering sub-section of Ratings content
 */
class AlbumRatingsPage extends Component {
  /**
   * @class
   */
  constructor() {
    super();

    this.endpoint = `${baseEndpoint()}/ratings/album`;
  }

  /**
   * Render method
   *
   * @returns {string} JSX Content
   */
  render() {
    return (
      <div className={styles.container}>
        <h2>Albums I've Listened To</h2>
        <br />
        <DataCollection
          endpoint={this.endpoint}
          itemTag={AlbumRatingsItem}
          sorter={generateCustomSorter('rating')}
        />
      </div>
    );
  }
}

export default AlbumRatingsPage;
