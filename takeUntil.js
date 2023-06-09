const assertArraysEqual = require("./assertArraysEqual");

const takeUntil = function(array, callback) {
  const results = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) { // check if truthy and if yes then exit the loop
      return results;
    }
    results.push(array[i]);
  }
  return results;
};

// Test Code
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood']);

const data3 = ["duck", "duck", "duck", "goose", "duck", "duck",];
const results3 = takeUntil(data3, x => x === "goose");
assertArraysEqual(results3, [ "duck", "duck", "duck" ]);

const results4 = takeUntil(data3, x => x === "chicken");
assertArraysEqual(results4, ["duck", "duck", "duck", "goose", "duck", "duck",]);

module.exports = takeUntil;