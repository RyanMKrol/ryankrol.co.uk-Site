import NodeCache from 'node-cache';
import { ONE_HOUR_S } from '@/lib/constants';
import { cacheReadthrough } from '@/lib/utilities/cache';
import { getWriteQueueInstance, scanTable } from '@/lib/utilities/dynamo';
import {
  handlerWithOptionalMiddleware,
  withAuthentication,
  withDateTracking,
} from '@/lib/utilities/middleware';

const MOVIE_RATINGS_TABLE = 'MovieRatings';
const CACHE = new NodeCache({ stdTTL: ONE_HOUR_S });

/**
 * Handles API calls for handling movie ratings
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
    scanTable(MOVIE_RATINGS_TABLE)
  );
}

/**
 * Handles POST requests to this API
 * @param {Request} req request
 * @param {Response} res response
 * @returns {object} The response object
 */
async function handlePost(req, res) {
  return {
    status: 200,
    message: 'Successful POST',
  };
}
