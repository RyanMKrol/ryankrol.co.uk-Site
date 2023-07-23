import { MethodNotAllowed, RequestNotAuthorised } from '@/lib/errors';

/**
 * A method to run a series of methods to handle a request, which can include middleware. Each method
 * must either throw an error, or return data to be sent in the response
 * @param {...Function} handlerMethods methods to run
 * @returns {Function} final method to call with the request and response objects
 */
async function handlerWithMiddleware(...handlerMethods) {
  return async (req, res) => {
    handlerMethods
      .reduce(async (acc, handlerFn) => {
        return acc
          .then(() => handlerFn(req, res))
          .catch((err) => {
            console.log(err);
            throw err;
          });
      }, Promise.resolve())
      .then((data) => {
        res.status(200).json({ data });
      })
      .catch((err) => {
        res.status(err.status).json({ Error: err.name });
      });
  };
}

/**
 * Middleware to stop unsupported methods from being used
 * @param {Array<string>} methods HTTP methods allowed by this API, e.g. GET, POST, etc
 * @returns {Function} middleware handler function
 */
function withAllowedMethods(methods) {
  return (req) => {
    if (!methods.includes(req.method)) {
      throw new MethodNotAllowed();
    }
  };
}

/**
 * Middleware to stop unauthorised requests from going through
 * @returns {Function} middleware handler function
 */
function withAuth() {
  return (req) => {
    if (req.body.token !== process.env.RYANKROL_SITE_KEY) {
      throw new RequestNotAuthorised();
    }
  };
}

export { handlerWithMiddleware, withAllowedMethods, withAuth };
