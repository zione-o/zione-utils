/**
 * Throttle function
 * Ensures function is called at most once every wait ms.
 *
 * @param {Function} fn
 * @param {number} wait
 * @returns {Function}
 */
export function throttle(fn, wait = 300) {
  let lastCall = 0;
  let timeout = null;

  return function throttled(...args) {
    const context = this;
    const now = Date.now();
    const remaining = wait - (now - lastCall);

    if (remaining <= 0) {
      clearTimeout(timeout);
      timeout = null;
      lastCall = now;
      fn.apply(context, args);
    } else if (!timeout) {
      timeout = setTimeout(() => {
        lastCall = Date.now();
        timeout = null;
        fn.apply(context, args);
      }, remaining);
    }
  };
}
