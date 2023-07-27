import NodeCache from 'node-cache';
import { ONE_HOUR_S } from '@/lib/constants';
import fetchThumbnailForAlbum from '@/lib/remote/lastFm';
import { cacheReadthrough } from '@/lib/utilities/cache';
import { getWriteQueueInstance, scanTable } from '@/lib/utilities/dynamo';
import {
  handlerWithOptionalMiddleware,
  withAuthentication,
  withDateTracking,
  withRequestBodyModification,
  withRequiredBodyKeys,
} from '@/lib/utilities/middleware';

const ALBUM_RATINGS_TABLE = 'AlbumRatings';
const CACHE = new NodeCache({ stdTTL: ONE_HOUR_S });

/**
 * Handles API calls for handling album ratings
 * @param {Request} req request
 * @param {Response} res response
 */
export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      await handlerWithOptionalMiddleware(req, res, handleGet);
      break;
    case 'POST':
      await handlerWithOptionalMiddleware(
        req,
        res,
        withAuthentication,
        withDateTracking,
        withRequiredBodyKeys([
          'title',
          'artist',
          'date',
          'highlights',
          'rating',
        ]),
        withRequestBodyModification(addThumbnail),
        withRequiredBodyKeys(['thumbnail']),
        handlePost
      );
      break;
    default:
      res.status(405).end(`${req.method} Not Allowed`);
      break;
  }
}

/**
 * Handles GET requests to this API
 * @returns {object} The response object
 */
async function handleGet() {
  // can use filename as the key here because this is the only file interacting with this cache object
  return cacheReadthrough(CACHE, __filename, async () =>
    scanTable(ALBUM_RATINGS_TABLE)
  );
}

/**
 * Handles POST requests to this API
 * @param {Request} req request
 * @returns {object} The response object
 */
async function handlePost(req) {
  return new Promise((resolve) => {
    const writeQueue = getWriteQueueInstance(ALBUM_RATINGS_TABLE);
    writeQueue.push(req.body, () => {
      resolve({ status: 200, message: 'Successful POST' });
    });
  });
}

/**
 * Method to be run by middleware to add a thumbnail to the request
 * @param {Request} req request
 */
async function addThumbnail(req) {
  const thumbnail = await fetchThumbnailForAlbum(
    req.body.artist,
    req.body.title
  );
  req.body.thumbnail = thumbnail;
}
