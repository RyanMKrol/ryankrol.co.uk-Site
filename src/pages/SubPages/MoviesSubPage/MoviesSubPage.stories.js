import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { FULL_SIZE_MOCK, LIMITED_SIZE_MOCK } from './__mocks__/MoviesSubPageMocks';

export default {
  title: 'Pages/MoviesSubPage',
};

/**
 * default story
 *
 * @returns {React.Component} JSX for the MoviesSubPage, with full output
 */
export const FullSize = () => (
  <Router>
    <FULL_SIZE_MOCK />
  </Router>
);

/**
 * default story
 *
 * @returns {React.Component} JSX for the MoviesSubPage, with limited output
 */
export const LimitedSize = () => (
  <Router>
    <LIMITED_SIZE_MOCK />
  </Router>
);
