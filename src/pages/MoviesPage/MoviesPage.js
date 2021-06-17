import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './MoviesPage.module.css';

import { DataCollection, MoviesItem } from '../../components';
import { baseEndpoint } from '../../utils/ProdUtils';

/**
 * Page for rendering sub-section of Ratings content
 */
class MoviesPage extends Component {
  /**
   * @param {object} props object containing a single prop - fullSize,
   *                       which dictates how much data to display
   * @class
   */
  constructor(props) {
    super();

    this.endpoint = `${baseEndpoint()}/movies`;
    this.outputLimit = props.fullSize ? undefined : 20;
    this.readMore = props.fullSize ? null : (
      <Link className={styles.seeMore} to={'/movies'}>
        <h1 className="highlighted">...</h1>
      </Link>
    );
  }

  /**
   * Render method
   *
   * @returns {string} JSX Content
   */
  render() {
    return (
      <div className={styles.container}>
        <h1 className="light">My Films</h1> <br />
        <p>Literally just a bunch of movies I own, idk</p>
        <DataCollection
          outputSize={this.outputLimit}
          endpoint={this.endpoint}
          itemTag={MoviesItem}
        />
        {this.readMore}
      </div>
    );
  }
}

export default MoviesPage;
