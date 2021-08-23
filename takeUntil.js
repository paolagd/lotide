const assertArraysEqual = require('./assertArraysEqual');
//create take until function that

const takeUntil = (array, untilConditionReview) => {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (untilConditionReview(array[i])) {
      return result;
    }
    result.push(array[i]);
  }
}

module.exports = takeUntil;

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);


// console.log(assertArraysEqual(results1, [1, 2, 5, 7, 2]));
// console.log(assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']));