import NodeCache from 'node-cache';
import { ONE_HOUR_S } from '@/lib/constants';
import { cacheReadthrough } from '@/lib/utilities/cache';
import { scanTable } from '@/lib/utilities/dynamo';
import {
  handlerWithOptionalMiddleware,
  withAuthentication,
  withDateTracking,
  withRequestBodyModification,
  withRequiredBodyKeys,
} from '@/lib/utilities/middleware';
import fetchRemoteInfoForBook from '@/lib/remote/googleBooks';

const BOOK_RATINGS_TABLE = 'BookRatings';
const CACHE = new NodeCache({ stdTTL: ONE_HOUR_S });

/**
 * Handles API calls for handling book ratings
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
        withRequiredBodyKeys(['title', 'author', 'date', 'rating']),
        withRequestBodyModification(addBookInfo),
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
    scanTable(BOOK_RATINGS_TABLE)
  );
}

/**
 * Handles POST requests to this API
 * @returns {object} The response object
 */
async function handlePost() {
  return {
    status: 200,
    message: 'Successful POST',
  };
}

/**
 * Calls the GoogleBooks API to find information like the thumbnail,
 * and publish date for the book
 * @param {Request} req request
 */
async function addBookInfo(req) {
  const book = await fetchRemoteInfoForBook(req.body.title, req.body.author);
  req.body = Object.assign({}, req.body, book);
}
