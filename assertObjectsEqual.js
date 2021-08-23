// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const assertArraysEqual = require('./assertArraysEqual');
const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;  
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}}]`);
  } else { 
    console.log(`🛑🛑🛑 Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`);
  }
};

const test = () => {
  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
  const cd2 = { c: "1", d: ["2", 3, 4] };
  console.log(assertObjectsEqual(ab,ba));  
   
}

module.exports = assertArraysEqual;