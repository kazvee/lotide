const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

// Test Code
// For arrays with one or two elements, there is no middle. Return an empty array.
assertArraysEqual(middle([1]), []); // Expected output: []
assertArraysEqual(middle([1, 2]), []); // Expected output: []
// For arrays with odd number of elements, an array containing a single middle element should be returned.
assertArraysEqual(middle([1, 2, 3]), [2]); // Expected output: [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // Expected output: [3]
// For arrays with an even number of elements, an array containing the two elements in the middle should be returned.
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // Expected output: [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // Expected output: [3, 4]
assertArraysEqual(middle(["breakfast", "lunch", "dinner"]), ["lunch"]); // Expected output: ["lunch"]
assertArraysEqual(middle(["breakfast", "lunch", "dinner", "dessert"]), ["lunch", "dinner"]); // Expected output: ["lunch", "dinner"]