const assertArraysEqual = require("./assertArraysEqual");

const without = function(source, itemsToRemove) {
  let kept = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      kept.push(source[i]);
    }
  }
  return kept;
};

// Test Code
assertArraysEqual((without([1, 2, 3], [1])), [2, 3]); // Expected output: [2, 3]
assertArraysEqual((without(["1", "2", "3"], [1, 2, "3"])), ["1", "2"]); // Expected output: ["1", "2"]
assertArraysEqual((without(["breakfast", "lunch", "dinner"], ["dessert"])), ["breakfast", "lunch", "dinner"]); // Expected output: ["breakfast", "lunch", "dinner"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;