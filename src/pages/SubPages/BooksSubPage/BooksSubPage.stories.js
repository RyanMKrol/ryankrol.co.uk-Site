import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import BooksSubPage from './BooksSubPage';

export default {
  title: 'Pages/BooksSubPage',
};

/**
 * default story
 *
 * @returns {React.Component} JSX for the BooksSubPage
 */
export const normal = () => (
  <Router>
    <BooksSubPage />
  </Router>
);
