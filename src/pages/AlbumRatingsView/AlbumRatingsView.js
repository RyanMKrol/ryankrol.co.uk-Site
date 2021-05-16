import React, { Component } from 'react';
import fetch from 'node-fetch';

import { AlbumRatingsItem, LoadingIcon } from '../../components';
import { ALBUM_RATINGS_VIEW_PAGE_DATA } from '../../data';

import { apiUtils } from '../../utils';

import './AlbumRatingsView.css';

const ALBUM_RATINGS_API_ENDPOINT = `${apiUtils.default()}/ratings/album`;

/**
 * Page to display my album reviews
 */
class AlbumRatingsView extends Component {
  /**
   * constructor
   */
  constructor() {
    super();

    this.state = {
      ratings: undefined,
    };

    fetch(ALBUM_RATINGS_API_ENDPOINT)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          ratings: data,
        });
      });
  }

  /**
   * Generates movie items using movies stored in state
   *
   * @returns {string} HTML for every movie item available to the page
   */
  generateAlbumRatingsItems() {
    if (typeof this.state.ratings === 'undefined') {
      return <LoadingIcon />;
    }

    return this.state.ratings.map((albumRating) => (
      <AlbumRatingsItem
        artist={albumRating.artist}
        title={albumRating.title}
        date={albumRating.date}
        highlights={albumRating.highlights}
        mood={albumRating.mood}
        rating={albumRating.rating}
      />
    ));
  }

  /**
   * Generates the summary line for the movies page
   *
   * @returns {string} HTML for the movies summary line
   */
  generatePageSummary() {
    if (typeof this.state.ratings === 'undefined') {
      return null;
    }

    return (
      <div className="album-ratings-view-page-summary">
        <h3>{ALBUM_RATINGS_VIEW_PAGE_DATA.summary}</h3>
      </div>
    );
  }

  /**
   * Renders the page
   *
   * @returns {string} HTML for the page
   */
  render() {
    const content = this.generateAlbumRatingsItems();
    const pageSummary = this.generatePageSummary();

    return (
      <div className="album-ratings-view-page-body">
        <div className="AlbumRatingsView">
          {pageSummary}
          {content}
        </div>
      </div>
    );
  }
}

export default AlbumRatingsView;
