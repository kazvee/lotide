const assert = require("chai").assert;
const middle = require("../middle");

describe("#middle", () => {

  it("returns an empty array when passed an array with a single element", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns an empty array when passed an array with only 2 elements", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("returns an array with 1 element when passed an array with an odd number of elements", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns an array with 2 elements when passed an array with an even number of elements", () => {
    assert.deepEqual(middle(["breakfast", "lunch", "dinner"]), ["lunch"]);
  });

});