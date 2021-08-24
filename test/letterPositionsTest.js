const assert = require('chai').assert;
const letterPositions = require('../letterPositions')

describe("#letterPositions", () => {
  it("[1] should be returned for 'hello'", () =>{
    assert.deepEqual(letterPositions("hello").e, [1]);
  })
}) 