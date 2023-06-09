const assert = require("chai").assert;
const findKeyByValue = require('../findKeyByValue');

const bestTVShowsByGenre = {
  "sci_fi": "The Expanse",
  "comedy": "Brooklyn Nine-Nine",
  "drama":  "The Wire"
};

describe("#findKeyByValue", () => {

  it("returns 'drama' for (bestTVShowsByGenre, 'The Wire')", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it("returns undefined for (bestTVShowsByGenre, 'That '70s Show')", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });

});