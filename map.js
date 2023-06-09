const assertArraysEqual = require("./assertArraysEqual");

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