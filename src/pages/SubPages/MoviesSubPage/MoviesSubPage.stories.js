import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import MoviesSubPage from './MoviesSubPage';

export default {
  title: 'Pages/MoviesSubPage',
};

/**
 * default story
 *
 * @returns {React.Component} JSX for the MoviesSubPage
 */
export const normal = () => (
  <Router>
    <MoviesSubPage />
  </Router>
);
