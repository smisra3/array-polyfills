/**
 *This method is a polyfill for Array.prototype.reduce.
  The order in which the params to the predicate function is to be passed is as follows: (accumulator, currentValue, currentIndex, array).
 * @param {Function} fn Is the predicate function used to check for the condition to filter.
 * @param {Object} accumulator Is the optional accumulator value passed to the reduce method. If this is not passed then the
 * first value of the array is set as the accumulator and currentValue begins from the second element. 
 * @param {Object} thisArg Is the optional this argument passed to the callback function with a different this value.
 * @returns {Object} Accumulator value on the basis of the callback's functionality.
 */
Array.prototype.__reduce = function (fn, accumulator, thisArg) {
  let startIndex,
    singleValue;
  if (!fn || typeof fn !== 'function')
    throw new TypeError();
  singleValue = this.length === 1 && !accumulator ? this : (accumulator && !this.length ? accumulator : false);
  if (singleValue)
    return singleValue;
  thisArg ? fn.bind(thisArg) : fn.bind(this);
  accumulator === undefined || accumulator === null ? (accumulator = this[0], startIndex = 1) : startIndex = 0;
  for (var i = startIndex; i < this.length; i++) {
    accumulator = fn(accumulator, this[i], i, this);
  }
  return accumulator;
}