import NodeCache from 'node-cache';
import { ONE_HOUR_S } from '@/lib/constants';
import { cacheReadthrough } from '@/lib/utilities/cache';
import { scanTable } from '@/lib/utilities/dynamo';

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
      await handleGet(req, res);
      break;
    case 'POST':
      await handlePost(req, res);
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
 */
async function handleGet(req, res) {
  // can use filename as the key here because this is the only file interacting with this cache object
  cacheReadthrough(CACHE, __filename, async () => {
    return scanTable(MOVIE_RATINGS_TABLE).catch(() => {
      throw new Error('something went wrong');
    });
  })
    .then((data) => {
      res.status(200).json({ data });
    })
    .catch((err) => {
      res.status(500).send(new String(err));
    });
}

/**
 * Handles POST requests to this API
 * @param {Request} req request
 * @param {Response} res response
 */
async function handlePost(req, res) {
  res.status(200).json({});
}
