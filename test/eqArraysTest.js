const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

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