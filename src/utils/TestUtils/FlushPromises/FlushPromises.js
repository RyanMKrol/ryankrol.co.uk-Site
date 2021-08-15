/**
 * Method to ensure that all promises are resolved.
 *
 * Note: this should never be used on the site, it's purely a testing
 * utility. It's useful when testing async lifecycle event behaviour.
 *
 * @returns {Promise<any>} A promise to call setImmediate
 */
function flushPromises() {
  return new Promise(setImmediate);
}

export default flushPromises;
