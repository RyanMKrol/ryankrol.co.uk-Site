import React from 'react';

import { MovieRatingsForm } from '../../components';

import './MovieRatingsInput.css';

/**
 * Page for gathering Movie ratings
 *
 * @returns {string} HTML for Album ratings page
 */
function MovieRatingsInput() {
  return (
    <div className="page-body">
      <div className="MovieRatingsInput">
        <MovieRatingsForm />
      </div>
    </div>
  );
}

export default MovieRatingsInput;
