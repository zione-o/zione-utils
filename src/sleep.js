/**
 * Sleep utility
 * Resolves a promise after given milliseconds.
 *
 * @param {number} ms
 * @returns {Promise<void>}
 */
export function sleep(ms = 0) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
