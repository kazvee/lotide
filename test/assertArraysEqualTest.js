const assertArraysEqual = require('../assertArraysEqual');

// Test Code
// These should PASS
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["breakfast", "lunch", "dinner"], ["breakfast", "lunch", "dinner"]);
assertArraysEqual(["dessert"], ["dessert"]);
// These should fail
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual([1, 2, 3], [1, 2]);
assertArraysEqual(["eleven", "apple", "8"], ["11", "orange", "8"]);