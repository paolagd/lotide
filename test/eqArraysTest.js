const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe("#eqArrays", () => {
  it("[1, 2, 3], [1, 2, 3] should return true", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  })

});

// console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1]))// => false

// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false

// assertEqual(eqArrays(["2", 3], ["2", 3, 4]), false);  
