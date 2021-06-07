/**
 * Returns the endpoint to use for API calls
 *
 * @returns {string} Base API endpoint to use
 */
function baseEndpoint() {
  if (process.env.REACT_APP_LOCAL_API !== undefined) {
    return 'http://localhost:8000/api';
  }
  return 'http://www.ryankrol.co.uk/api';
}

export default baseEndpoint;
