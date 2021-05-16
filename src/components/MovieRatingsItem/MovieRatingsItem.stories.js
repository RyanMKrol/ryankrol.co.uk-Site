import React from 'react';
import MovieRatingsItem from './MovieRatingsItem';

export default {
  title: 'Components/MovieRatingsItem',
};

/**
 * default story
 *
 * @returns {string} JSX for the component I want to display
 */
export const normal = () => (
  <div>
    <MovieRatingsItem
      title={'300'}
      blind={86}
      characters={81}
      craftsmanship={83}
      gist={'300 Spartans dunk on a Persian weirdo'}
      sound={81}
      story={89}
      date={'07-04-2021'}
    />
  </div>
);
