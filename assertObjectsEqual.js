const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (Array.isArray(object1[key])) {
      if (!eqObjects(object1[key], object2[key])) {
        return false;
      }

    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// Test Code
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertObjectsEqual(eqObjects(shirtObject , anotherShirtObject), true); // Expected output: true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertObjectsEqual(eqObjects(shirtObject , longSleeveShirtObject), false); // Expected output: false

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertObjectsEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true); // Expected output: true

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertObjectsEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false); // Expected output: false

const sweaterObject = { size: "medium", colors: ["red", "black"], };
assertObjectsEqual(eqObjects(sweaterObject  , multiColorShirtObject), false); // Expected output: false

const tShirtObject = { color: "red", size: "medium" };
assertObjectsEqual(eqObjects(tShirtObject , shirtObject), true); // Expected output: true

module.exports = assertObjectsEqual;