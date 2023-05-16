const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  let newArray = array.slice(1);
  return newArray;
};

// Test Code
// Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// An array with only one element should yield an empty array for its tail
const oneWord = ["Testeroo"];
tail(oneWord);
assertEqual(oneWord.length, 1);

// An empty array should yield an empty array for its tail
const empty = [];
tail(empty);
assertEqual(empty.length, 0);
