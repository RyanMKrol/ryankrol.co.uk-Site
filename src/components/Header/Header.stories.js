import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './Header';

export default {
  title: 'Components/Header',
};

/**
 * default story
 *
 * @returns {React.Component} JSX for the Header
 */
export const normal = () => (
  <Router>
    <Header />
  </Router>
);
