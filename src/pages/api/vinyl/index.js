import NodeCache from 'node-cache';
import { ONE_DAY_S } from '@/lib/constants';
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

const VINYL_COLLECTION_TABLE = 'VinylCollection';
const CACHE = new NodeCache({ stdTTL: ONE_DAY_S });

/**
 * Handles API calls for handling my vinyl collection
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
        withRequiredBodyKeys(['title', 'artist', 'date']),
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
 * @param {Request} req request
 * @param {Response} res response
 * @returns {object} The response object
 */
async function handleGet(req, res) {
  // can use filename as the key here because this is the only file interacting with this cache object
  return cacheReadthrough(CACHE, __filename, async () =>
    scanTable(VINYL_COLLECTION_TABLE)
  );
}

/**
 * Handles POST requests to this API
 * @param {Request} req request
 * @param {Response} res response
 * @returns {object} The response object
 */
async function handlePost(req, res) {
  return new Promise((resolve) => {
    const writeQueue = getWriteQueueInstance(VINYL_COLLECTION_TABLE);
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
