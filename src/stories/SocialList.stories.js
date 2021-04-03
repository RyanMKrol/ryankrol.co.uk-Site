import React from 'react';
import SocialList from '../components/SocialList';

export default {
  title: 'SocialList',
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
