const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

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
assertEqual(result["n"], 1);