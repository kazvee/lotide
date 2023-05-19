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

const flatten = function(arrayWithNestedArrays) {
  let flattenedArray = [];
  for (let i = 0; i < arrayWithNestedArrays.length; i++) {
    if (Array.isArray(arrayWithNestedArrays[i])) {
      for (let j = 0; j < arrayWithNestedArrays[i].length; j++) {
        flattenedArray.push(arrayWithNestedArrays[i][j]);
      }
    } else {
      flattenedArray.push(arrayWithNestedArrays[i]);
    }
  }
  return flattenedArray;
};

// Test Code
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // Expected output: [1, 2, 3, 4, 5, 6]
assertArraysEqual(flatten([1, 2, ["three"], 4, [5], 6]), [1, 2, "three", 4, 5, 6]); // Expected output: [1, 2, "three", 4, 5, 6]
assertArraysEqual(flatten([[1, 2, 3, 4, 5, 6]]), [1, 2, 3, 4, 5, 6]); // Expected output: [1, 2, 3, 4, 5, 6]
assertArraysEqual(flatten([["breakfast", "lunch", "dinner"], ["dessert"]]), ["breakfast", "lunch", "dinner", "dessert"]); // Expected output: ["breakfast", "lunch", "dinner", "dessert"]