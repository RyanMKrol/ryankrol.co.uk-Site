import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';

export default {
  title: 'Components/Header',
};

/**
 * default story
 *
 * @returns {string} JSX for the component I want to display
 */
export const normal = () => (
  <Router>
    <Header />
  </Router>
);
