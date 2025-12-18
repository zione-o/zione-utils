/**
 * Debounce function
 * Delays execution until after wait ms have elapsed
 * since the last time the function was invoked.
 *
 * @param {Function} fn
 * @param {number} wait
 * @param {boolean} immediate
 * @returns {Function}
 */
export function debounce(fn, wait = 300, immediate = false) {
  let timeout = null;

  function debounced(...args) {
    const context = this;

    const callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(() => {
      timeout = null;
      if (!immediate) {
        fn.apply(context, args);
      }
    }, wait);

    if (callNow) {
      fn.apply(context, args);
    }
  }

  debounced.cancel = () => {
    clearTimeout(timeout);
    timeout = null;
  };

  return debounced;
}
