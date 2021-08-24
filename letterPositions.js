const letterPositions = function (sentence) {
  sentence = sentence.replace(/\s/g, '');
  const result = {};
  for (let i = 0; i < sentence.length; i++) {
    if (result[sentence[i]] === undefined) {
      result[sentence[i]] = [];
    }
    result[sentence[i]].push(i);
  }
  return result;
};
  
module.exports = letterPositions;
