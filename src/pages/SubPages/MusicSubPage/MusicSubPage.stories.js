import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import MusicSubPage from './MusicSubPage';

export default {
  title: 'Pages/MusicSubPage',
};

export const normal = () => (
  <Router>
    <MusicSubPage />
  </Router>
);
