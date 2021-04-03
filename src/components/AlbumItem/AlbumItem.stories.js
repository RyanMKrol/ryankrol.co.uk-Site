import React from 'react';
import AlbumItem from './AlbumItem';

export default {
  title: 'AlbumItem',
};

/**
 * default story
 *
 * @returns {string} JSX for the component I want to display
 */
export const normal = () => (
  <div style={{ display: 'flex' }}>
    <AlbumItem
      artist={'Die Antwoord'}
      albumName={'Ten$ion'}
      thumbnail={
        'https://lastfm.freetls.fastly.net/i/u/300x300/d3561c0bd8c01a27bc3e8991a68f45f4.png'
      }
      albumLink={'/'}
      playcount={123}
    />
  </div>
);
