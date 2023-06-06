const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`❌ Assertion Failed: ${array1} !== ${array2}`);
  }
};

const eqArrays = function(first, second) {
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// Test Code
// These should pass:
const words = ["just", "going", "with", "the", "flow"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1.length, words.length);
assertArraysEqual(results1, ['j', 'g', 'w', 't', 'f']);
const results2 = map(words, word => word.length);
assertArraysEqual(results2, [4, 5, 4, 3, 4]);
const results3 = map(words, word => word + word);
assertArraysEqual(results3, ["justjust", "goinggoing", "withwith", "thethe", "flowflow"]);
// This should fail:
assertArraysEqual(results1, words);

module.exports = map;