const assertArraysEqual = require('./assertArraysEqual');

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const words = ["2round", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);

console.log(results1);

assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);

module.exports = map;