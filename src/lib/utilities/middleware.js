import { RequestNotAuthorised } from '@/lib/errors';

/**
 * A method to run a series of methods to handle a request, which can include middleware. Each method
 * must either throw an error, or return data to be sent in the response
 * @param {Request} req request
 * @param {Response} res response
 * @param {...Function} handlerMethods methods to run
 * @returns {Function} final method to call with the request and response objects
 */
async function handlerWithOptionalMiddleware(req, res, ...handlerMethods) {
  return handlerMethods
    .reduce(async (acc, handlerFn) => {
      return acc
        .then(() => handlerFn(req, res))
        .catch((err) => {
          throw err;
        });
    }, Promise.resolve())
    .then((data) => {
      res.status(200).json({ data });
    })
    .catch((err) => {
      if (err.status && err.name) {
        res.status(err.status).json({ message: err.name });
      } else {
        res.status(500).json({ message: 'Something went wrong' });
      }
    });
}

/**
 * Middleware to stop unauthorised requests from going through
 * @param {Request} req request
 */
function authMiddleware(req) {
  if (req.body.password !== process.env.RYANKROL_SITE_KEY) {
    throw new RequestNotAuthorised();
  }
}

export { handlerWithOptionalMiddleware, authMiddleware };
