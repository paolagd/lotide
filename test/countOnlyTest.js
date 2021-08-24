const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("#countOnly", () => {
  it("Jason is sent it should return 1 ", () => {

    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];

    let result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }) 
    assert.strictEqual(result['Jason'], 1);

  })

});

 
 