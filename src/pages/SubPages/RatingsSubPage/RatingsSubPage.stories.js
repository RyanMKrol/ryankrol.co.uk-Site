import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import RatingsSubPage from './RatingsSubPage';

export default {
  title: 'Pages/RatingsSubPage',
};

/**
 * default story
 *
 * @returns {React.Component} JSX for the RatingsSubPage
 */
export const normal = () => (
  <Router>
    <RatingsSubPage />
  </Router>
);
