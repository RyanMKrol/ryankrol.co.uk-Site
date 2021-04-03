import React from 'react';
import Footer from './Footer';

export default {
  title: 'Components/Footer',
};

/**
 * default story
 *
 * @returns {string} JSX for the component I want to display
 */
export const normal = () => (
  <div style={{ 'background-color': 'black' }}>
    <Footer />
  </div>
);
