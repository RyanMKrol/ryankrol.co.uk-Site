import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './BooksSubPage.module.css';

import { DataCollection, BooksItem } from '../../../components';
import { baseEndpoint } from '../../../utils/ProdUtils';

/**
 * Page for rendering sub-section of Ratings content
 */
class BooksSubPage extends Component {
  /**
   * @class
   */
  constructor() {
    super();

    this.endpoint = `${baseEndpoint()}/books`;
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
        <h2>My never-ending reading list!</h2>
        <br />
        <DataCollection
          outputSize={this.outputLimit}
          endpoint={this.endpoint}
          itemTag={BooksItem}
        />
        <Link className={styles.seeMore} to={'/ReadingList'}>
          <h2>...</h2>
        </Link>
      </div>
    );
  }
}

export default BooksSubPage;
