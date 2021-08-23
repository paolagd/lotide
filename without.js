const assertArraysEqual = require('./assertArraysEqual');

const without = (source, itemsToRemove) => {
  let cleanArray = [];
  for (const item of source) {
    if (!itemsToRemove.includes(item)){
      cleanArray.push(item)
    }
  }

  return cleanArray;
} 

module.exports = without;

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

// //without([1, 2, 3], [1]) // => [2, 3]
// //without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]