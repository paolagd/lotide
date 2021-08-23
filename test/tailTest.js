const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("should return ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.deepEqual(tail(words), ['Lighthouse', 'Labs']);
  });
});