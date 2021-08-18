const eqArrays = (array1, array2) => {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
}

const assertArraysEqual = (array1, array2) => {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: [${array1}] === [${array2}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${array1}] !== [${array2}]`);
  }
}

const letterPositions = function (sentence) {
  sentence = sentence.replace(/\s/g, '');
  const result = {};
  for (let i = 0; i < sentence.length; i++) {
    if (result[sentence[i]] === undefined) {
      result[sentence[i]] = [];
    }
    result[sentence[i]].push(i);
  }
  return result;
};


var result = letterPositions("hello"); 
assertArraysEqual(letterPositions("hello").e, [1]);