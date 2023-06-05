const assert = require("chai").assert;
const tail = require('../tail');

describe("#tail", () => {

  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse, 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });

  it("returns an empty array when passed an array with a single element", () => {
    assert.deepEqual(tail(['Testeroo']), []);
  });

  it("returns an empty array when passed an empty array", () => {
    assert.deepEqual(tail([]), []);
  });

});