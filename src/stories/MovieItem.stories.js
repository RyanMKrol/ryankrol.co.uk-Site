import React from 'react';
import MovieItem from '../components/MovieItem';

export default {
  title: 'MovieItem',
};

/**
 * default story
 *
 * @returns {string} JSX for the component I want to display
 */
export const normal = () => (
  <div style={{ display: 'flex' }}>
    <MovieItem
      movieName={'Blade Runner 2049'}
      movieThumbnail={
        'https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_SX300.jpg'
      }
      movieRuntime={'164 min'}
      movieReleaseDate={'06 Oct 2017'}
    />
  </div>
);
