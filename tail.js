const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const tail = (array) => {
  return array.slice(1);
};

const words = ["Yo Yo"];
console.log(tail(words));
assertEqual(words.length, 3);