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

const middle = function(array) {
  let result = [];
  if (array.length <= 2) {
    return result;
  } else if (array.length % 2 === 0) {
    let twoMiddleElements = array.length / 2 - 1;
    return array.slice(twoMiddleElements, twoMiddleElements + 2);
  } else {
    let singleMiddleElement = Math.floor(array.length / 2);
    return [array[singleMiddleElement]];
  }
};

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