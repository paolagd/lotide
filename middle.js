const eqArrays = (array1, array2) => {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
}

const assertArraysEqual = (array1, array2) => {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: [${array1}] === [${array2}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${array1}] !== [${array2}]`);
  }
}

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

console.log(assertArraysEqual(middle([1, 2, 3]),[2])) // => [2]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4] 

