import React from 'react';

import { AlbumRatingsForm } from '../components';

import './AlbumRatings.css';

/**
 * Page for gathering Album ratings
 *
 * @returns {string} HTML for Album ratings page
 */
function AlbumRatings() {
  return (
    <div className="page-body">
      <div className="AlbumRatings">
        <AlbumRatingsForm />
      </div>
    </div>
  );
}

export default AlbumRatings;
