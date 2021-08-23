const assertEqual = require('./assertEqual');

const countLetters = function (string) {
  string = string.replace(/\s/g, '');
  const result = {};
  for (const letter of string) {
    if (result[letter] === undefined) {
      result[letter] = 1;
    } else {
      result[letter]++;
    }
  }
  return result;
}


var result = countLetters("lighthouse in the house");
console.log(result);
assertEqual(result["n"], 1);

module.exports = countLetters;