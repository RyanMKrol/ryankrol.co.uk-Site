import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './MoviesSubPage.module.css';

import { DataCollection, MoviesItem } from '../../components';
import { baseEndpoint } from '../../utils/ProdUtils';

/**
 * Page for rendering sub-section of Ratings content
 */
class MoviesSubPage extends Component {
  /**
   * @class
   */
  constructor() {
    super();

    this.endpoint = `${baseEndpoint()}/movies`;
    this.outputLimit = 20;
  }

  /**
   * Render method
   *
   * @returns {string} JSX Content
   */
  render() {
    return (
      <div className={styles.container}>
        <h2>Ryan's Movies</h2> <br />
        <p>Literally just a bunch of movies I own, idk</p>
        <DataCollection
          outputSize={this.outputLimit}
          endpoint={this.endpoint}
          itemTag={MoviesItem}
        />
        <Link className={styles.seeMore} to={'/MoviesList'}>
          <h2>...</h2>
        </Link>
      </div>
    );
  }
}

export default MoviesSubPage;
