import React from 'react';
import AlbumRatingsItem from './AlbumRatingsItem';

export default {
  title: 'Components/AlbumRatingsItem',
};

/**
 * default story
 *
 * @returns {string} JSX for the component I want to display
 */
export const normal = () => (
  <div>
    <AlbumRatingsItem
      artist={'Gorillaz'}
      title={'Demon Days'}
      date={'15-03-21'}
      highlights={'Dirty Harry, Feel Good Inc.'}
      mood={'Upbeat'}
      rating={84}
    />
  </div>
);
