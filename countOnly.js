const assertEqual = require('./assertEqual');
const countLetters = require('./countLetters');

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function (allItems, itemsToCount) {
  const result = {};
  for (const itemName in itemsToCount) {
    //if we want to count the itemName we review the Alltimes array looking for occurrences 
    if (itemsToCount[itemName]) {
      var occurrences = 0;
      for (let i = 0; i < allItems.length; i++) {
        if (allItems[i] === itemName) occurrences++;
      }
      if (occurrences !== 0) result[itemName] = occurrences;
    }
  }
  return result;
}

const test = () => {
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

  const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
  console.log(result1)

  assertEqual(result1["Jason"], 1);
  assertEqual(result1["Karima"], undefined);
  assertEqual(result1["Fang"], 2);
  assertEqual(result1["Agouhanna"], undefined);
}
 
module.exports = countOnly;