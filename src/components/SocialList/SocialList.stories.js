import React from 'react';
import SocialList from './SocialList';

export default {
  title: 'Components/SocialList',
};

/**
 * default story
 *
 * @returns {string} JSX for the component I want to display
 */
export const normal = () => (
  <div style={{ display: 'flex' }}>
    <SocialList />
  </div>
);
