/**
 * This function is the fallback for Array.prototype.filter which accepts a callback function which will be executed 
 * upon the array which called it or the optional this argument, if passed.
 * The order in which the params to the predicate function is to be passed is as follows: (index, element, array), where
 * index is current index of the element being iterated and array is the array on which the __map is called. 
 * @param {Function} fn Is the callback to be executed. 
 * @param {Object} thisArg Is the optional this argument passed, if we want to change the this inside the callback.
 * @returns newArray or error depending.
 */

Array.prototype.__map = function (fn, thisArg) {
  if (!fn || typeof fn !== 'function')
    throw new TypeError();
  var newArr = [];
  if (thisArg) {
    fn.bind(thisArg);
  }
  for (let index in this) {
    if (this[index] || typeof this[index] == 'undefined') {
      newArr.push(fn(i, this[index], this));
    }
  }
  return newArr;
}