import React from 'react';

import { AlbumRatingsForm } from '../../components';

import './AlbumRatingsInput.css';

/**
 * Page for gathering Album ratings
 *
 * @returns {string} HTML for Album ratings page
 */
function AlbumRatingsInput() {
  return (
    <div className="page-body">
      <div className="AlbumRatingsInput">
        <AlbumRatingsForm />
      </div>
    </div>
  );
}

export default AlbumRatingsInput;
