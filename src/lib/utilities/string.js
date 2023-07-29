/**
 * Formats a value to remove "The " from the beginning, if it is present
 * @param {string} value The string to format
 * @returns {string} the formatted string
 */
export function formatStringForTitleSort(value) {
  const source = value.toLowerCase();
  return source.startsWith('the ') ? source.substring(4) : source;
}
