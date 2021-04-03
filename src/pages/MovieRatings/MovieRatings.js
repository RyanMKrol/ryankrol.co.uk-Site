import React from 'react';

import { MovieRatingsForm } from '../../components';

import './MovieRatings.css';

/**
 * Page for gathering Movie ratings
 *
 * @returns {string} HTML for Album ratings page
 */
function MovieRatings() {
  return (
    <div className="page-body">
      <div className="MovieRatings">
        <MovieRatingsForm />
      </div>
    </div>
  );
}

export default MovieRatings;
