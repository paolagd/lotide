const assertArraysEqual = require('./assertArraysEqual');
const flatten = (array) => {
  var newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      newArray.push(array[i]);
    }else{
      for (let e = 0; e < array[i].length; e++) {
        newArray.push(array[i][e]);        
      }
    }
  }
  return newArray;
}

console.log(flatten([1, 2, [3, 4], 5, [6]]));
console.log(assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3,4,5,6])) // => true

module.exports = flatten;
