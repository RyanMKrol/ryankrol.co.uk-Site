import React, { Component } from 'react';

import styles from './MoviesPage.module.css';

import { DataCollection, MoviesItem } from '../../../components';
import { baseEndpoint } from '../../../utils/ProdUtils';

/**
 * Page for rendering sub-section of Ratings content
 */
class MoviesPage extends Component {
  /**
   * @class
   */
  constructor() {
    super();

    this.endpoint = `${baseEndpoint()}/movies`;
  }

  /**
   * Render method
   *
   * @returns {string} JSX Content
   */
  render() {
    return (
      <div className={styles.container}>
        <h2>Literally just a bunch of movies I own, idk</h2>
        <br />
        <DataCollection endpoint={this.endpoint} itemTag={MoviesItem} />
      </div>
    );
  }
}

export default MoviesPage;
