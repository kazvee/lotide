const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {

  it("returns true for [1, 2, 3], [1, 2, 3]", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it("returns false for [1, 2, 3], [3, 2, 1]", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });

  it("returns true for ['1', '2', '3'], ['1', '2', '3']", () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });

  it("returns false for ['1', '2', '3'], ['1', '2', 3]", () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });

  it("returns false for [1, 2, 3], [1, 2]", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2]), false);
  });

  it("returns false for [1, 'a', 3], [1, 2, 3]", () => {
    assert.deepEqual(eqArrays([1, "a", 3], [1, 2, 3]), false);
  });

  it("returns false for ['eleven', 'apple', '8'], ['11', 'orange', '8']", () => {
    assert.deepEqual(eqArrays(["eleven", "apple", "8"], ["11", "orange", "8"]), false);
  });

});