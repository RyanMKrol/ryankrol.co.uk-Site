import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';

export default {
  title: 'Header',
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
