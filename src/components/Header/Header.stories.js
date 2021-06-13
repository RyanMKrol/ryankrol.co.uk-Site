import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './Header';

export default {
  title: 'Components/Header',
};

export const Default = () => (
  <Router>
    <Header />
  </Router>
);
