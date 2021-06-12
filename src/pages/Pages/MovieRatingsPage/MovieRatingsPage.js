import React, { Component } from 'react';

import { DataCollection, MovieRatingsItem } from '../../../components';

import styles from './MovieRatingsPage.module.css';

import { baseEndpoint, generateCustomSorter } from '../../../utils/ProdUtils';

/**
 * Page for rendering sub-section of Ratings content
 */
class MovieRatingsPage extends Component {
  /**
   * @class
   */
  constructor() {
    super();

    this.endpoint = `${baseEndpoint()}/ratings/movie`;
  }

  /**
   * Render method
   *
   * @returns {string} JSX Content
   */
  render() {
    return (
      <div className={styles.container}>
        <h2>Movies I've Watched</h2>
        <br />
        <DataCollection
          endpoint={this.endpoint}
          itemTag={MovieRatingsItem}
          sorter={generateCustomSorter('blind')}
        />
      </div>
    );
  }
}

export default MovieRatingsPage;
