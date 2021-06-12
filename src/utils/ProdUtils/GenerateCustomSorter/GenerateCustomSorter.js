/**
 * Method to create a sorter using custom data properties
 *
 * @param {string} property The key to sort with
 * @returns {Function} Sorter function to sort our data
 */
function generateCustomSorter(property) {
  return (a, b) => {
    if (a[property] < b[property]) {
      return 1;
    }
    if (a[property] > b[property]) {
      return -1;
    }

    return 0;
  };
}

export default generateCustomSorter;
