/**
 * Used for sorting tv or movie rating items by rating, first the primary score, then secondary scores
 * @param {object} a Tv or Movie rating item
 * @param {object} b Tv or Movie rating item
 * @returns {number} Whether a is after b
 */
function sortByRating(a, b) {
  return a.blind < b.blind
    ? 1
    : a.blind === b.blind
    ? sortByOtherScores(a, b)
    : -1;
}

/**
 * Used for sorting tv or movie rating items by secondary scores, in cases where the primary score is tied
 * @param {object} a Tv or Movie rating item
 * @param {object} b Tv or Movie rating item
 * @returns {number} Whether a is after b
 */
function sortByOtherScores(a, b) {
  const aScore = a.story + a.characters + a.sound + a.craftsmanship;
  const bScore = b.story + b.characters + b.sound + b.craftsmanship;
  return aScore < bScore ? 1 : aScore === bScore ? 0 : -1;
}

export default sortByRating;
