const assert = require("chai").assert;
const eqObjects = require('../eqObjects');

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
const sweaterObject = { size: "medium", colors: ["red", "black"] };
const tShirtObject = { color: "red", size: "medium" };

describe("#eqObjects", () => {

  it("returns true for (shirtObject, anotherShirtObject)", () => {
    assert.deepEqual(eqObjects(shirtObject, anotherShirtObject), true);
  });

  it("returns false for (shirtObject, longSleeveShirtObject)", () => {
    assert.deepEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
  });

  it("returns true for (multiColorShirtObject, anotherMultiColorShirtObject)", () => {
    assert.deepEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);
  });

  it("returns false for (multiColorShirtObject, longSleeveMultiColorShirtObject)", () => {
    assert.deepEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);
  });

  it("returns false for (sweaterObject, multiColorShirtObject)", () => {
    assert.deepEqual(eqObjects(sweaterObject, multiColorShirtObject), false);
  });

  it("returns true for (tShirtObject, shirtObject)", () => {
    assert.deepEqual(eqObjects(tShirtObject, shirtObject), true);
  });

});