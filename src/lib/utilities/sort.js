import { formatStringForTitleSort } from './string';

/**
 * Used for sorting tv or movie rating items by rating, first the primary score, then secondary scores
 * @param {object} a Tv or Movie rating item
 * @param {object} b Tv or Movie rating item
 * @returns {number} Whether a is after b
 */
function movieAndTvRatingSort(a, b) {
  return a.overallScore < b.overallScore
    ? 1
    : a.overallScore === b.overallScore
    ? movieAndTvRatingSortByOtherScores(a, b)
    : -1;
}

/**
 * Used for sorting tv or movie rating items by secondary scores, in cases where the primary score is tied
 * @param {object} a Tv or Movie rating item
 * @param {object} b Tv or Movie rating item
 * @returns {number} Whether a is after b
 */
function movieAndTvRatingSortByOtherScores(a, b) {
  const aScore =
    a.storyScore + a.characterScore + a.soundScore + a.craftsmanshipScore;
  const bScore =
    b.storyScore + b.characterScore + b.soundScore + b.craftsmanshipScore;
  return aScore < bScore ? 1 : aScore === bScore ? 0 : -1;
}

/**
 * Sorter function to sort vinyl items by artist
 * @param {object} a the first vinyl object
 * @param {object} b the second vinyl object
 * @returns {boolean} Whether a is before b
 */
function bookRatingSort(a, b) {
  return a.rating < b.rating
    ? 1
    : a.rating === b.rating
    ? movieAndTvRatingSortByTitle(a, b)
    : -1;
}

/**
 * Sorter function to sort vinyl items by title
 * @param {object} a the first vinyl object
 * @param {object} b the second vinyl object
 * @returns {boolean} Whether a is before b
 */
function movieAndTvRatingSortByTitle(a, b) {
  const formattedTitleA = formatStringForTitleSort(a.title);
  const formattedTitleB = formatStringForTitleSort(b.title);
  return formattedTitleA < formattedTitleB
    ? -1
    : formattedTitleA === formattedTitleB
    ? 0
    : 1;
}

/**
 * Sorter function to sort album rating objects by score
 * @param {object} a the first album rating object
 * @param {object} b the second album rating object
 * @returns {boolean} Whether a is before b
 */
function albumRatingSort(a, b) {
  return a.rating < b.rating ? 1 : a.rating === b.rating ? 0 : -1;
}

export { movieAndTvRatingSort, bookRatingSort, albumRatingSort };
