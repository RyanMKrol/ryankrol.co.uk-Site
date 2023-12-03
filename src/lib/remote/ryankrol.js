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

/**
 * Fetches tv ratings
 * @returns {Array<object>} array of tv rating objects
 */
async function fetchTvRatings() {
  const res = await fetch(`http://ryankrol.co.uk/api/ratings/tv`);

  const tvRatings = await res.json();

  tvRatings.sort(movieAndTvRatingSort);

  return tvRatings;
}

/**
 * Fetches upcoming concerts
 * @returns {object} a map of date:{concertInfo}
 */
async function fetchUpcomingConcerts() {
  const res = await fetch(`http://ryankrol.co.uk/api/concerts`);

  const concertData = await res.json();

  return concertData;
}

export {
  fetchAlbumRatings,
  fetchBookRatings,
  fetchMovieRatings,
  fetchTvRatings,
  fetchUpcomingConcerts,
};
