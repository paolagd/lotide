// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function (object1, object2) {
  //Verify if both objects have as many keys
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;

  for (const key in object1) {
    if (!object2.hasOwnProperty(key)) { //verifies if the key exists on both objects
      return false;
    } else if (Array.isArray(object1[key])) {  //if one key contains an array, verifies that the second object also has an identical array assigned to that key
      if (!eqArrays(object1[key], object2[key]))  
        return false;
    } else if (object1[key] !== object2[key]) { //if it is not an array, compares values
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;  
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}}]`);
  } else { 
    console.log(`🛑🛑🛑 Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`);
  }
};



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertObjectsEqual(cd2,ba));  
 