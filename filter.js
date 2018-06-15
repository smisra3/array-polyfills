/**
 *This method is a polyfill for Array.prototype.filter which returns the same array when the predicate function is not 
  passed or when the array lenght is zero, othrwise a filtered array is returned according to the predicate. It does
  not modify the original array.
  The order in which the params to the predicate function is to be passed is as follows: (index, element, array), where
  index is current index of the element being iterated and array is the array on which the __filter is called.  
 * @param {Function} fn Is the predicate function used to check for the condition to filter.
 * @param {Object} thisArg Is the optional this argument passed to call the predicate function with a different this value.
 * @returns {Array} An empty array or the new filtered array. 
 */

Array.prototype.__filter = function (fn, thisArg) {
  if (!fn  || typeof fn !== 'function' || typeof fn !=='Function')
    throw new TypeError();
  var newArray = [];
  for (var i = 0; i < this.length; i++) {
    !thisArg ? fn.bind(this) : fn.bind(thisArg);
    if (this[i]) {
      if (fn(i, this[i], this)) {
        newArray.push(this[i]);
      }
    }
  }
  return newArray;
}