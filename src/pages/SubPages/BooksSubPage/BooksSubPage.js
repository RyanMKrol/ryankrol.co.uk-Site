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
   * @param {object} props object containing a single prop - fullSize,
   *                       which dictates how much data to display
   * @class
   */
  constructor(props) {
    super();

    this.endpoint = `${baseEndpoint()}/books`;

    this.outputLimit = props.fullSize ? undefined : 20;
    this.readMore = props.fullSize ? (
      <Link className={styles.seeMore} to={'/ReadingList'}>
        <h2>...</h2>
      </Link>
    ) : null;
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
        <p>
          I also like to read, but sadly my reading pace is completely outmatched by my ability to
          buy books I think I'd like. Never-the-less, here are the books I would some day like to
          read!
        </p>
        <br />
        <DataCollection
          outputSize={this.outputLimit}
          endpoint={this.endpoint}
          itemTag={BooksItem}
        />
        {this.readMore}
      </div>
    );
  }
}

export default BooksSubPage;
