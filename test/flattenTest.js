const assert = require("chai").assert;
const flatten = require('../flatten');

describe("#flatten", () => {

  it("returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });

  it("returns [1, 2, 'three', 4, 5, 6] for [1, 2, ['three'], 4, [5], 6]]", () => {
    assert.deepEqual(flatten([1, 2, ["three"], 4, [5], 6]), [1, 2, "three", 4, 5, 6]);
  });

  it("returns [1, 2, 3, 4, 5, 6] for [[1, 2, 3, 4, 5, 6]]", () => {
    assert.deepEqual(flatten([[1, 2, 3, 4, 5, 6]]), [1, 2, 3, 4, 5, 6]);
  });

  it("returns ['breakfast', 'lunch', 'dinner', 'dessert'] for [['breakfast', 'lunch', 'dinner'], ['dessert']]", () => {
    assert.deepEqual(flatten([["breakfast", "lunch", "dinner"], ["dessert"]]), ["breakfast", "lunch", "dinner", "dessert"]);
  });

});