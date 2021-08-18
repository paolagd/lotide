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

const flatten = (array) => {
  var newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      newArray.push(array[i]);
    }else{
      for (let e = 0; e < array[i].length; e++) {
        newArray.push(array[i][e]);        
      }
    }
  }

  return newArray;
}
console.log(flatten([1, 2, [3, 4], 5, [6]]));

console.log(assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3,4,5,6])) // => true