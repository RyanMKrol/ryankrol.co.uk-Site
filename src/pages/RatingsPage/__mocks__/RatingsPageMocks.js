import RatingsPage from '../RatingsPage';

const FULL_SIZE_ALBUMS_MOCK = (
  <RatingsPage
    showMovieRatings={false}
    showAlbumRatings={true}
    fullMovieRatings={false}
    fullAlbumRatings={true}
  />
);

const LIMITED_SIZE_ALBUMS_MOCK = (
  <RatingsPage
    showMovieRatings={false}
    showAlbumRatings={true}
    fullMovieRatings={false}
    fullAlbumRatings={false}
  />
);

const FULL_SIZE_MOVIES_MOCK = (
  <RatingsPage
    showMovieRatings={true}
    showAlbumRatings={false}
    fullMovieRatings={true}
    fullAlbumRatings={false}
  />
);

const LIMITED_SIZE_MOVIES_MOCK = (
  <RatingsPage
    showMovieRatings={true}
    showAlbumRatings={false}
    fullMovieRatings={false}
    fullAlbumRatings={false}
  />
);
export {
  FULL_SIZE_ALBUMS_MOCK,
  LIMITED_SIZE_ALBUMS_MOCK,
  FULL_SIZE_MOVIES_MOCK,
  LIMITED_SIZE_MOVIES_MOCK,
};
