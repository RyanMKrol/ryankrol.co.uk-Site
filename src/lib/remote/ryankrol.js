import {
  bookRatingSort,
  albumRatingSort,
  movieAndTvRatingSort,
} from '../utilities/sort';

/**
 * Fetches album ratings
 * @returns {Array<object>} array of album rating objects
 */
async function fetchAlbumRatings() {
  const res = await fetch(`http://ryankrol.co.uk/api/ratings/album`);

  const albumRatings = await res.json();

  albumRatings.sort(albumRatingSort);

  return albumRatings;
}

/**
 * Fetches book ratings
 * @returns {Array<object>} array of book rating objects
 */
async function fetchBookRatings() {
  const res = await fetch(`http://ryankrol.co.uk/api/ratings/book`);

  const bookRatings = await res.json();

  bookRatings.sort(bookRatingSort);

  return bookRatings;
}

/**
 * Fetches movie ratings
 * @returns {Array<object>} array of movie rating objects
 */
async function fetchMovieRatings() {
  const res = await fetch(`http://ryankrol.co.uk/api/ratings/movie`);

  const movieRatings = await res.json();

  movieRatings.sort(movieAndTvRatingSort);

  return movieRatings;
}

export { fetchAlbumRatings, fetchBookRatings, fetchMovieRatings };
