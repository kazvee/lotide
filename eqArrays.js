const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
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

// Test Code
// These should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
// These should fail
assertEqual(eqArrays([1, 2, 3], [1, 2]), true);
assertEqual(eqArrays([1, "a", 3], [1, 2, 3]), true);
assertEqual(eqArrays(["eleven", "apple", "8"], ["11", "orange", "8"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), false);