import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import MusicPage from './MusicPage';

export default {
  title: 'Pages/MusicPage',
};

export const Default = () => (
  <Router>
    <MusicPage />
  </Router>
);
