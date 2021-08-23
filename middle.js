
//returns an array with the middle elements
const middle = (array) => {
  var middleArray = [];
  const length = array.length;

  if (length < 3) {
    return middleArray;
  } else if (length % 2 === 0) { // if the number is even
    const middlePos = ((length - 1) / 2) - 0.5; // middle position in the array 
    middleArray[0] = array[middlePos];
    middleArray[1] = array[middlePos] + 1;
  } else if (length % 2 !== 0) { // if the number is odd
    const middlePos = ((length - 1) / 2); // middle position in the array 
    middleArray[0] = array[middlePos];
  }
  return middleArray;
}

module.exports = middle; 