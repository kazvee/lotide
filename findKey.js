const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};

// Test Code
const data1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};
assertEqual(findKey(data1, x => x.stars === 2), "noma");

const data2 = {
  "Barn":     { contains: "chicken" },
  "Field":    { contains: "horse" },
  "Haystack": { contains: "needle"},
  "Mud":      { contains: "pig" },
  "Pond":     { contains: "duck" },
};
assertEqual(findKey(data2, x => x.contains === "needle"), "Haystack");

const data3 = {
  "Burger":       { price: 6.50 },
  "Fish Sticks":  { price: 5.99 },
  "Soup":         { price: 4.00 },
  "Coffee":       { price: 2.65 },
  "Soda":         { price: 1.75 },
};
assertEqual(findKey(data3, x => x.price <= 1), undefined);
