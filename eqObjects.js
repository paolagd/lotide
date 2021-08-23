const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  //Verifies if both objects have as many keys
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

 
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertEqual(eqObjects(ab, ba), true)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(assertEqual(eqObjects(ab, abc), false)); // => false


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertEqual(eqObjects(abc, dc), false)); // => false

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertEqual(eqObjects(cd, cd2), false));
 

module.exports = eqObjects;
 