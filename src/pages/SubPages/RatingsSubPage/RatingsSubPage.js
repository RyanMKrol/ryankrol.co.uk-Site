import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { DataCollection, MovieRatingsItem, AlbumRatingsItem } from '../../../components';
import styles from './RatingsSubPage.module.css';

import { baseEndpoint, generateCustomSorter } from '../../../utils/ProdUtils';

/**
 * Page for rendering sub-section of Ratings content
 */
class RatingsSubPage extends Component {
  /**
   * @class
   */
  constructor() {
    super();

    this.moviesEndpoint = `${baseEndpoint()}/ratings/movie`;
    this.albumsEndpoint = `${baseEndpoint()}/ratings/album`;
    this.moviesOutputLimit = 6;
    this.albumsOutputLimit = 6;
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
        <p>
          Like most humans, I enjoy watching movies! Unlike most humans however, I've taken the time
          to setup a system to track what I think of the movies I watch. If you'd like to see how
          I've rated anything I've watched since December 2020, then look no further!
        </p>
        <br />
        <DataCollection
          outputSize={this.moviesOutputLimit}
          endpoint={this.moviesEndpoint}
          itemTag={MovieRatingsItem}
          sorter={generateCustomSorter('blind')}
        />
        <Link className={styles.seeMore} to={'/MovieRatings'}>
          <h2>...</h2>
        </Link>
        <h2>Albums I've Listened To</h2>
        <p>Like the movie ratings, but this time, with music!</p>
        <br />
        <DataCollection
          outputSize={this.albumsOutputLimit}
          endpoint={this.albumsEndpoint}
          itemTag={AlbumRatingsItem}
          sorter={generateCustomSorter('rating')}
        />
        <Link className={styles.seeMore} to={'/AlbumRatings'}>
          <h2>...</h2>
        </Link>
      </div>
    );
  }
}

export default RatingsSubPage;
