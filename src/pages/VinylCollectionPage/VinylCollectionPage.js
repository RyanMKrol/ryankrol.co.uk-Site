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
        <DataCollection endpoint={this.endpoint} itemTag={VinylCollectionItem} />
      </div>
    );
  }
}

export default VinylCollectionPage;
