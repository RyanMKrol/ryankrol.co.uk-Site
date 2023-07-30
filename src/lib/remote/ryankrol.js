/**
 * Fetches album ratings
 * @returns {Array<object>} array of album rating objects
 */
async function fetchAlbumRatings() {
  const res = await fetch(`http://ryankrol.co.uk/api/ratings/album`);

  const albumRatings = await res.json();

  albumRatings.sort((a, b) =>
    a.rating < b.rating ? 1 : a.rating === b.rating ? 0 : -1
  );

  return albumRatings;
}

export default fetchAlbumRatings;
