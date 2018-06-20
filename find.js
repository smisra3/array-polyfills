/**
 * This function is the fallback for Array.prototype.find which accepts a callback function which will be executed 
 * upon the array which called it or the optional this argument, if passed.
 * The order in which the params to the predicate function is to be passed is as follows: (element, index, array), where
 * index is current index of the element being iterated and array is the array on which the __find is called. 
 * @param {Function} fn Is the callback to be executed. 
 * @param {Object} thisArg Is the optional this argument passed, if we want to change the 'this inside the callback.
 * @returns The first value when the callback returns true.
 */

Array.prototype.__find = function (fn, thisArg) {
  if (!fn || typeof fn !== 'function')
    throw new TypeError();
  if (thisArg) {
    fn.bind(thisArg);
  }
  for (let index in this) {
    if (fn(this[index], index, this)) {
      return this[index];
    }
  }
  return undefined;
};