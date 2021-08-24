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
 
module.exports = countOnly;