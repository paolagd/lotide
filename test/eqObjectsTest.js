const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

describe("#eqObjects", () => {
  it("{ a: '1', b: '2' } and { b: '2', a: '1' } should return true", () => {

    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };

    assert.strictEqual(eqObjects(ab, ba), true);
  })
});

// const abc = { a: "1", b: "2", c: "3" };
// console.log(assertEqual(eqObjects(ab, abc), false)); // => false


// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// console.log(assertEqual(eqObjects(abc, dc), false)); // => false

// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(assertEqual(eqObjects(cd, cd2), false));



// console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1]))// => false

// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false

// assertEqual(eqArrays(["2", 3], ["2", 3, 4]), false);  
