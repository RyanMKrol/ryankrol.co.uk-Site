import React from 'react';

import { MovieRatingsForm } from '../components';

import './Playground.css';

/**
 * Page to play around with
 *
 * @returns {string} HTML for playground page
 */
function Playground() {
  return (
    <div className="page-body">
      <div className="Playground">
        <MovieRatingsForm />
      </div>
    </div>
  );
}

export default Playground;
