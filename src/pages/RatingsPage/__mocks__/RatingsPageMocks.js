import RatingsPage from '../RatingsPage';

const FULL_SIZE_ALBUMS_MOCK = (
  <RatingsPage
    showMovieRatings={false}
    showAlbumRatings={true}
    showTelevisionRatings={false}
    fullMovieRatings={false}
    fullAlbumRatings={true}
    fullTelevisionRatings={false}
  />
);

const LIMITED_SIZE_ALBUMS_MOCK = (
  <RatingsPage
    showMovieRatings={false}
    showAlbumRatings={true}
    showTelevisionRatings={false}
    fullMovieRatings={false}
    fullAlbumRatings={false}
    fullTelevisionRatings={false}
  />
);

const FULL_SIZE_MOVIES_MOCK = (
  <RatingsPage
    showMovieRatings={true}
    showAlbumRatings={false}
    showTelevisionRatings={false}
    fullMovieRatings={true}
    fullAlbumRatings={false}
    fullTelevisionRatings={false}
  />
);

const LIMITED_SIZE_MOVIES_MOCK = (
  <RatingsPage
    showMovieRatings={true}
    showAlbumRatings={false}
    showTelevisionRatings={false}
    fullMovieRatings={false}
    fullAlbumRatings={false}
    fullTelevisionRatings={false}
  />
);

const FULL_SIZE_TELEVISION_MOCK = (
  <RatingsPage
    showMovieRatings={false}
    showAlbumRatings={false}
    showTelevisionRatings={true}
    fullMovieRatings={false}
    fullAlbumRatings={false}
    fullTelevisionRatings={true}
  />
);

const LIMITED_SIZE_TELEVISION_MOCK = (
  <RatingsPage
    showMovieRatings={false}
    showAlbumRatings={false}
    showTelevisionRatings={true}
    fullMovieRatings={false}
    fullAlbumRatings={false}
    fullTelevisionRatings={false}
  />
);

export {
  FULL_SIZE_ALBUMS_MOCK,
  LIMITED_SIZE_ALBUMS_MOCK,
  FULL_SIZE_MOVIES_MOCK,
  LIMITED_SIZE_MOVIES_MOCK,
  FULL_SIZE_TELEVISION_MOCK,
  LIMITED_SIZE_TELEVISION_MOCK,
};
