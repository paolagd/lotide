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
 
module.exports = flatten;
