import React, { Component } from 'react';

import styles from './VinylCollectionPage.module.css';

import { DataCollection, VinylCollectionItem } from '../../components';
import { baseEndpoint } from '../../utils/ProdUtils';

/**
 * Page for rendering sub-section of Ratings content
 */
class VinylCollectionPage extends Component {
  /**
   * @class
   */
  constructor() {
    super();

    this.endpoint = `${baseEndpoint()}/vinyl`;
  }

  /**
   * Render method
   *
   * @returns {string} JSX Content
   */
  render() {
    return (
      <div className={styles.container}>
        <h1 className="light">My Vinyl Collection</h1> <br />
        <p>Literally just a bunch of vinyl I own, idk</p>
        <DataCollection sorter={sortVinyl} endpoint={this.endpoint} itemTag={VinylCollectionItem} />
      </div>
    );
  }
}

/**
 * Sorter for vinyl items
 *
 * @param {object} a Vinyl collection item A
 * @param {object} b Vinyl collection item B
 * @returns {boolean} Whether a < b
 */
export function sortVinyl(a, b) {
  if (a.artist.toLowerCase() < b.artist.toLowerCase()) {
    return -1;
  }
  if (a.artist.toLowerCase() > b.artist.toLowerCase()) {
    return 1;
  }

  return 0;
}

export default VinylCollectionPage;
