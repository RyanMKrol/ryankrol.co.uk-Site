import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Playground from './Playground';

export default {
  title: 'Pages/Playground',
};

/**
 * default story
 *
 * @returns {React.Component} JSX for the Playground
 */
export const normal = () => (
  <Router>
    <Playground />
  </Router>
);
