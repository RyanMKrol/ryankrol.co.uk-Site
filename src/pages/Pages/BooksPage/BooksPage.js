import React, { Component } from 'react';

import styles from './BooksPage.module.css';

import { DataCollection, BooksItem } from '../../../components';
import { baseEndpoint } from '../../../utils/ProdUtils';

/**
 * Page for rendering sub-section of Ratings content
 */
class BooksPage extends Component {
  /**
   * @class
   */
  constructor() {
    super();

    this.endpoint = `${baseEndpoint()}/books`;
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
        <DataCollection endpoint={this.endpoint} itemTag={BooksItem} />
      </div>
    );
  }
}

export default BooksPage;
