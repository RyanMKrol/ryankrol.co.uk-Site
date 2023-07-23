import {
  handlerWithOptionalMiddleware,
  authMiddleware,
} from '@/lib/utilities/middleware';

/**
 * Handles API calls for handling TV ratings
 * @param {Request} req request
 * @param {Response} res response
 */
export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      await handlerWithOptionalMiddleware(req, res, handleGet);
      break;
    case 'POST':
      await handlerWithOptionalMiddleware(req, res, authMiddleware, handlePost);
      break;
    default:
      res.status(405).end(`${req.method} Not Allowed`);
      break;
  }
}

/**
 * Handles GET requests
 * @param {Request} req request
 * @param {Response} res response
 * @returns {object} The response object
 */
async function handleGet(req, res) {
  return {
    status: 200,
    message: 'Successful GET',
  };
}

/**
 * Handles POST requests
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
