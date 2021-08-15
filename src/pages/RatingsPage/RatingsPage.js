import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {
  DataCollection,
  MovieRatingsItem,
  AlbumRatingsItem,
  TelevisionRatingsItem,
} from '../../components';
import styles from './RatingsPage.module.css';

import { baseEndpoint, generateCustomSorter } from '../../utils/ProdUtils';

/**
 * Page for rendering sub-section of Ratings content
 */
class RatingsPage extends Component {
  /**
   * @param {object} props object dictating whether to show each rating type,
   *                       and whether to show them all
   * @class
   */
  constructor(props) {
    super();

    this.moviesEndpoint = `${baseEndpoint()}/ratings/movie`;
    this.albumsEndpoint = `${baseEndpoint()}/ratings/album`;
    this.televisionEndpoint = `${baseEndpoint()}/ratings/tv`;

    this.showMovieRatings = props.showMovieRatings;
    this.showAlbumRatings = props.showAlbumRatings;
    this.showTelevisionRatings = props.showTelevisionRatings;

    this.fullMovieRatings = props.fullMovieRatings;
    this.fullAlbumRatings = props.fullAlbumRatings;
    this.fullTelevisionRatings = props.fullTelevisionRatings;

    this.moviesOutputLimit = props.fullMovieRatings ? undefined : 6;
    this.albumsOutputLimit = props.fullAlbumRatings ? undefined : 6;
    this.televisionOutputLimit = props.fullTelevisionRatings ? undefined : 6;
  }

  /**
   * Generate the movie content based on input props
   *
   * @returns {string} JSX content for movie ratings
   */
  generateMovieContent() {
    return this.showMovieRatings ? (
      <>
        <h1 className="light">Movies I've Watched</h1>
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
        {this.fullMovieRatings ? null : (
          <Link className={styles.seeMore} to={'/ratings/movie'}>
            <h1 className="highlighted">...</h1>
          </Link>
        )}
      </>
    ) : null;
  }

  /**
   * Generate the album content based on input props
   *
   * @returns {string} JSX content for album ratings
   */
  generateAlbumContent() {
    return this.showAlbumRatings ? (
      <>
        <h1 className="light">Albums I've Listened To</h1>
        <p>Like the movie ratings, but this time, with music!</p>
        <br />
        <DataCollection
          outputSize={this.albumsOutputLimit}
          endpoint={this.albumsEndpoint}
          itemTag={AlbumRatingsItem}
          sorter={generateCustomSorter('rating')}
        />
        {this.fullAlbumRatings ? null : (
          <Link className={styles.seeMore} to={'/ratings/album'}>
            <h1 className="highlighted">...</h1>
          </Link>
        )}
      </>
    ) : null;
  }

  /**
   * Generate the album content based on input props
   *
   * @returns {string} JSX content for television ratings
   */
  generateTelevisionContent() {
    return this.showTelevisionRatings ? (
      <>
        <h1 className="light">TV shows I've watched</h1>
        <p>Like the movie ratings, but this time, with TV!</p>
        <br />
        <DataCollection
          outputSize={this.televisionOutputLimit}
          endpoint={this.televisionEndpoint}
          itemTag={TelevisionRatingsItem}
          sorter={generateCustomSorter('blind')}
        />
        {this.fullTelevisionRatings ? null : (
          <Link className={styles.seeMore} to={'/ratings/tv'}>
            <h1 className="highlighted">...</h1>
          </Link>
        )}
      </>
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
        {this.generateMovieContent()}
        {this.generateAlbumContent()}
        {this.generateTelevisionContent()}
      </div>
    );
  }
}

export default RatingsPage;
