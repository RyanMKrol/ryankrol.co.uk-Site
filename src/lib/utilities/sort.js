/**
 * Used for sorting tv or movie rating items by rating, first the primary score, then secondary scores
 * @param {object} a Tv or Movie rating item
 * @param {object} b Tv or Movie rating item
 * @returns {number} Whether a is after b
 */
function sortByRating(a, b) {
  return a.overallScore < b.overallScore
    ? 1
    : a.overallScore === b.overallScore
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
  const aScore =
    a.storyScore + a.characterScore + a.soundScore + a.craftsmanshipScore;
  const bScore =
    b.storyScore + b.characterScore + b.soundScore + b.craftsmanshipScore;
  return aScore < bScore ? 1 : aScore === bScore ? 0 : -1;
}

export default sortByRating;
